<script setup lang="ts">
import MovieCard from "@/components/MovieCard.vue";
import { useLocalStorage } from "@vueuse/core";
const bookmarked = useLocalStorage<Record<string, any>>("bookmarks", {});
</script>

<template>
  <div class="py-4 px-4 md:py-8 md:px-10">
    <h1 class="font-semibold">Bookmarked Movies</h1>
    <!--  -->
    <div class="pt-6" v-if="bookmarked">
      <div
        class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-4"
      >
        <MovieCard
          v-for="movie of bookmarked"
          :key="movie.Title + movie.imdbID"
          :movie="movie"
        />
      </div>
    </div>
    <!--  -->
  </div>
</template>

<style></style>
