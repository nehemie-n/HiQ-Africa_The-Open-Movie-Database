import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * Fetches a single movie by id or title
 */
export const useMovieStore = defineStore("useMovieStore", () => {
  const q = ref<string>();

  function fetchResults() {}

  return { q };
});
