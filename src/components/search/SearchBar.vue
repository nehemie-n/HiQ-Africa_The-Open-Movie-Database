<script setup lang="ts">
import { useSearchStore } from "@/stores";
import { storeToRefs } from "pinia";

const { q } = storeToRefs(useSearchStore());
const { fetchResults } = useSearchStore();

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
  console.log(ev);
  console.log(q.value);
  fetchResults();
}
</script>

<template>
  <div class="px-4 hover:px-0 transition-all duration-500">
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
  @apply border-4 border-slate-100;
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
  @apply px-6 py-2 text-base rounded-full min-w-[300px];
}
</style>
