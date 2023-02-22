import type { SearchResults } from "@/interface";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
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
  function fetchResults() {
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
   * When called resets the results
   */
  function resetResults() {
    results.data = {
      Search: [],
      Response: "True",
      totalResults: "",
    };
  }
  return { q, fetchResults, resetResults };
});
