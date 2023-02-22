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
    label: "About",
    link: "",
  },
  {
    label: "Pricing",
    link: "",
  },
  {
    label: "Series",
    link: "",
  },
  {
    label: "Movies",
    link: "",
  },
];
</script>

<template>
  <div class="border-b-2 border-white/10 py-2">
    <Screen>
      <div class="flex flex-row justify-between items-center">
        <!--  -->
        <!-- Logo -->
        <router-link to="/">
          <h2 class="py-2 font-bold">OMDb</h2>
        </router-link>
        <!-- Search -->
        <!--  -->
        <div>
          <SearchBar v-if="showSearch"></SearchBar>
          <div v-else>
            <div class="flex-row justify-center grid grid-cols-4">
              <div v-for="link of links">
                <router-link class="px-8 py-6 transition-all hover:bg-slate-600/60 " :to="link.link">{{ link.label }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <!-- Account Drop -->
        <div>
          <router-link to="/account/bookmarks">
            <img
              class="w-12 h-12 rounded-full"
              src="https://tailwindui.com/img/avatar-3.jpg"
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
