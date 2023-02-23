import { useLocalStorage, useStorage } from "@vueuse/core";

import type { MovieResult, SingleMovie } from "@/interface";
import { computed } from "vue";

export const useMovieComposable = (movie: SingleMovie | MovieResult) => {
  const status = useLocalStorage<Record<string, any>>("bookmarks", {});

  const isBookmarked = computed(() => {
    return status.value[movie.imdbID] !== undefined;
  });

  function bookmark() {
    status.value[movie.imdbID] = {
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Title: movie.Title,
      Type: movie.Type,
      Year: movie.Year,
    };
  }

  function unBookmark() {
    status.value[movie.imdbID] = undefined;
  }

  return {
    bookmark,
    unBookmark,
    isBookmarked,
  };
};
