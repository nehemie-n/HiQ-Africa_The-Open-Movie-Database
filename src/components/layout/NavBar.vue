<script setup lang="ts">
import SearchBar from "../search/SearchBar.vue";
import Screen from "./Screen.vue";

defineProps({
  showSearch: {
    type: Boolean,
    required: true,
  },
});

const links = [
  {
    label: "Series",
    link: "/search/series",
  },
  {
    label: "Movies",
    link: "/search/movies",
  },
  {
    label: "Bookmarked",
    link: "/account/bookmarks",
  },
];
</script>

<template>
  <div class="border-b-2 bg-slate-900 backdrop-blur border-white/10 py-2">
    <Screen>
      <div class="flex flex-row justify-between items-center">
        <!--  -->
        <!-- Logo -->
        <router-link to="/">
          <h2 class="text-xs md:text-base py-2 font-bold">OMDb</h2>
        </router-link>
        <!-- Search -->
        <!--  -->
        <div>
          <div v-if="showSearch">
            <SearchBar></SearchBar>
          </div>
          <div v-else class="text-center hidden md:block">
            <div class="flex-row justify-center items-center grid grid-cols-3">
              <div v-for="link of links">
                <router-link
                  class="px-8 py-6 transition-all hover:bg-slate-600/60"
                  :to="link.link"
                  >{{ link.label }}</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <!-- Account Drop -->
        <div>
          <router-link to="/account/bookmarks">
            <img
              class="w-10 h-10 md:w-12 md:h-12 rounded-full"
              src="https://api.dicebear.com/5.x/micah/svg?seed=Chloe"
              alt="Account Image"
            />
          </router-link>
        </div>
        <!--  -->
      </div>
    </Screen>
  </div>
</template>

<style></style>
