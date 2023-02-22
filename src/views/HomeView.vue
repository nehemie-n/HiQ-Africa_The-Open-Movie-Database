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
      <div class="text-center mx-auto max-w-xl">
        <h2 class="text-4xl py-2 font-semibold">Search For A Movie!</h2>
        <p class="text-sm opacity-60">
          In the OMDb API, a RESTful web service to obtain movie information.
          All content and images on the site are contributed and maintained by
          our users.
        </p>
      </div>
      <!--  -->
      <div class="py-6 w-full max-w-2xl">
        <SearchBarVue size="lg"></SearchBarVue>
      </div>
      <!--  -->
      <div class="text-center mx-auto max-w-md">
        <p class="opacity-80 text-pink-100">
          Remember to press enter <br> to trigger search!
        </p>
      </div>
      <!--  -->
    </div>
  </MainLayoutVue>
</template>

<style></style>
