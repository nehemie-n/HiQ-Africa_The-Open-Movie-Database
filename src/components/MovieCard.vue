<script setup lang="ts">
import { useMovieComposable } from "@/composables";
import type { MovieResult } from "@/interface";
import { capitalize, computed } from "vue";
import { BookmarkAddOutlined, BookmarkAddedRound } from "@vicons/material";
import { Icon } from "@vicons/utils";

const props = defineProps({
  movie: {
    type: Object as () => MovieResult,
    required: true,
  },
});

const title = computed(() => {
  return props.movie.Title.length > 20
    ? props.movie.Title.slice(0, 21) + "..."
    : props.movie.Title;
});

const { bookmark, isBookmarked, unBookmark } = useMovieComposable(props.movie);
</script>

<template>
  <div class="MovieCard">
    <!-- Img -->
    <router-link :to="`/movie/${movie.imdbID}`">
      <div class="MovieCard-Img">
        <img
          :src="movie.Poster"
          class="rounded-sm object-cover object-top w-full h-[220px] md:h-[260px] lg:h-[290px] xl:h-[310px]"
          alt=""
        />
      </div>
    </router-link>
    <!-- Title -->
    <div
      class="py-2 px-2 flex flex-row flex-nowrap items-center justify-between"
    >
      <router-link :to="`/movie/${movie.imdbID}`">
        <div>
          <div>
            <h3 class="MovieTitle text-sm font-semibold">
              {{ title }}
            </h3>
          </div>
          <div class="text-xs">
            <span>
              {{ capitalize(movie.Type) }}
            </span>
            <span class="MovieYear px-1"> - {{ movie.Year }} </span>
          </div>
        </div>
      </router-link>
      <!--  -->
      <div>
        <button class="px-2 py-1" @click="unBookmark" v-if="isBookmarked">
          <Icon size="22" class="text-pink-700">
            <BookmarkAddedRound />
          </Icon>
        </button>
        <button class="px-2 py-1" @click="bookmark" v-else>
          <Icon size="22">
            <BookmarkAddOutlined />
          </Icon>
        </button>
      </div>
      <!--  -->
    </div>
  </div>
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
