<script setup lang="ts">
import Button from "@/components/Button.vue";
import { useMovieComposable } from "@/composables";
import type { MovieResult, SingleMovie } from "@/interface";
import { BookmarkAddOutlined, BookmarkAddedRound } from "@vicons/material";
import { Icon } from "@vicons/utils";

const props = defineProps({
  movie: {
    type: Object as () => SingleMovie | MovieResult,
    required: true,
  },
});
const { bookmark, isBookmarked, unBookmark } = useMovieComposable(props.movie);
</script>

<template>
  <div>
    <Button type="primary" @click="unBookmark" v-if="isBookmarked">
      <Icon size="20" class="text-white">
        <BookmarkAddedRound />
      </Icon>
      <span> Bookmarked </span>
    </Button>
    <Button @click="bookmark" v-else>
      <Icon size="20">
        <BookmarkAddOutlined />
      </Icon>
      <span> Bookmark </span>
    </Button>
  </div>
</template>

<style lang="scss"></style>
