<script setup lang="ts">
import type { MovieResult } from "@/interface";
import { capitalize, computed } from "vue";

const props = defineProps({
  movie: {
    type: Object as () => MovieResult,
    required: true,
  },
});

const title = computed(() => {
  return props.movie.Title.length > 30
    ? props.movie.Title.slice(0, 25) + "..."
    : props.movie.Title;
});
</script>

<template>
  <router-link :to="`/movie/${movie.imdbID}`">
    <div class="MovieCard">
      <!-- Img -->
      <div class="MovieCard-Img">
        <img
          :src="movie.Poster"
          class="rounded-sm object-cover object-top w-full h-[310px]"
          alt=""
        />
      </div>
      <!-- Title -->
      <div class="py-2 px-4">
        <div>
          <h3 class="text-sm font-semibold">
            {{ title }}
          </h3>
        </div>
        <div class="text-xs">
          <span>
            {{ capitalize(movie.Type) }}
          </span>
          <span class="px-1"> - {{ movie.Year }} </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style>
.MovieCard {
  @apply bg-slate-100 text-slate-900;
  @apply rounded-md overflow-hidden;
  @apply min-h-[300px];
  @apply cursor-pointer;
  @apply border-2 border-slate-900 transition-all;
  @apply hover:bg-slate-900 hover:text-white hover:border-pink-600;
}
</style>
