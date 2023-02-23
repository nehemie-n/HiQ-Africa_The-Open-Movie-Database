import type { SingleMovie } from "@/interface";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { API } from "./api";

/**
 * Fetches a single movie by id or title
 */
export const useMovieStore = defineStore("useMovieStore", () => {
  const id = ref<string>();
  const isLoading = ref<boolean>(false);
  const result = reactive({ data: undefined as any as SingleMovie });
  /**
   * Triggers fetching results
   * @returns
   */
  function apiFetch() {
    isLoading.value = true;
    return API.get<SingleMovie>("", { params: { i: id.value } })
      .then((resp) => {
        result.data = resp.data;
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  function fetchResults(_id: string) {
    resetResults();
    id.value = _id;
    return apiFetch();
  }

  function resetResults() {
    isLoading.value = false;
    result.data = undefined as any;
  }

  return { fetchResults, result, isLoading };
});
