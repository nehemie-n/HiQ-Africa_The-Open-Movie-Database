<script setup lang="ts">
import { useSearchStore } from "@/stores";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";

const { q } = storeToRefs(useSearchStore());
const route = useRoute();
const router = useRouter();

/**
 *
 */
defineProps({
  size: {
    type: String as () => "lg" | "def",
    default: "def",
  },
});

/**
 * Only trigger results when the query is available
 * @param ev
 */
function search(ev: Event) {
  ev.preventDefault();
  if ((q.value?.length ?? 0) > 2) {
    router.push(`/search/${q.value}`);
  }
}
</script>

<template>
  <div class="px-4 hover:px-1 hover:md:px-0 transition-all duration-500">
    <form class="SearchBar" :class="size" @submit="search">
      <input
        v-model="q"
        placeholder="Search for movie, serie, tv show"
        type="text"
      />
    </form>
  </div>
</template>

<style>
/* Shared */
.SearchBar {
  @apply bg-white w-full rounded-lg;
}
.SearchBar input {
  @apply rounded-lg w-full text-black transition-all;
  @apply border-2 md:border-4;
  @apply  border-slate-100;
  @apply hover:border-pink-700 focus-visible:outline-none;
}
/* For big search box */
.SearchBar.lg {
}
.SearchBar.lg input {
  @apply px-6 py-6 text-xl;
}

/* For small */
.SearchBar.def {
  @apply rounded-full;
}
.SearchBar.def input {
  @apply rounded-full;
  @apply px-2 py-3 text-xs min-w-[120px];
  @apply md:px-6 md:py-2 md:text-base  md:min-w-[300px];
}
</style>
