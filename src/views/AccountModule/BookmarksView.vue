<script setup lang="ts">
import MovieCard from "@/components/MovieCard.vue";
import { useLocalStorage, useTitle } from "@vueuse/core";
const bookmarked = useLocalStorage<Record<string, any>>("bookmarks", {});

useTitle("My Bookmarked Movies");
</script>

<template>
  <div class="py-4 px-4 md:py-8 md:px-10">
    <h1 class="font-semibold">Bookmarked Movies</h1>
    <!--  -->
    <div class="pt-6" v-if="bookmarked">
      <div
        class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-4"
      >
        <MovieCard
          v-for="movie of bookmarked"
          :key="movie.Title + movie.imdbID"
          :movie="movie"
        />
      </div>
    </div>
    <!--  -->
    <div v-else class="py-16 text-center">
      <h4 class="text-2xl py-2">Oops!</h4>
      <p class="text-slate-400">
        There is nothing to show you here, <br />
        You haven't bookmarked any movie.
      </p>
    </div>
    <!--  -->
  </div>
</template>

<style></style>
