<script setup lang="ts">
import MainLayoutVue from "@/components/layout/MainLayout.vue";
import SearchBarVue from "@/components/search/SearchBar.vue";
import { useSearchStore } from "@/stores";
import { storeToRefs } from "pinia";
const { q } = storeToRefs(useSearchStore());
</script>

<template>
  <MainLayoutVue :show-search="false">
    <div class="min-h-[85vh] flex flex-col justify-center items-center">
      <!--  -->
      <div class="py-6 w-full max-w-2xl">
        <SearchBarVue size="lg"></SearchBarVue>
      </div>
      <!--  -->
      <div class="text-center mx-auto max-w-xl">
        <p class="text-sm opacity-60">
          The OMDb API is a RESTful web service to obtain movie information, all
          content and images on the site are contributed and maintained by our
          users.
        </p>
        <h2 class="text-xl py-2 font-semibold">The Open Movie Database</h2>
      </div>
    </div>
  </MainLayoutVue>
</template>

<style></style>
