import type { SearchResults } from "@/interface";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { API } from "./api";

export const useSearchStore = defineStore("useSearchStore", () => {
  const q = ref<string>();
  const isLoading = ref<boolean>(false);
  const results = reactive({
    data: {
      Search: [],
      Response: "True",
      totalResults: "",
    } as SearchResults,
  });

  /**
   * Triggers fetching results
   * @returns
   */
  function apiFetch() {
    isLoading.value = true;
    return API.get<SearchResults>("", {
      params: {
        s: q.value,
      },
    })
      .then((resp) => {
        results.data = resp.data;
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  /**
   * If on the results page trigger API
   * Otherwise visit the page first
   */
  function fetchResults() {
    if ((q.value?.length ?? 0) > 2) {
      resetResults();
      apiFetch();
    }
  }

  /**
   * When called resets the results
   */
  function resetResults() {
    results.data = {
      Search: [],
      Response: "True",
      totalResults: "",
    };
  }
  return { q, isLoading, results, fetchResults, resetResults };
});
