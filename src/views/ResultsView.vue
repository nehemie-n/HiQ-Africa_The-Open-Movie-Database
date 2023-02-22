<script setup lang="ts">
import MainLayout from "@/components/layout/MainLayout.vue";
import spinnerVue from "@/components/spinner.vue";
import { useSearchStore } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const { q, results, isLoading } = storeToRefs(useSearchStore());
const { fetchResults } = useSearchStore();
const route = useRoute();

onMounted(() => {
  console.log("Route Name View: ", route);
  q.value = route.params.q as string;
  fetchResults();
});
</script>

<template>
  <MainLayout :show-search="true">
    <div>
      <!-- If loading -->
      <div v-show="isLoading" class="py-6 md:py-16">
        <spinnerVue>
          <div>Fetching results ...</div>
        </spinnerVue>
      </div>
      <!-- else -->
      <div v-if="results.data.Search" class="py-12">
        {{ results }}
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <div
            v-for="movie of results.data.Search"
            :key="movie.Title + movie.imdbID"
            class="bg-slate-900 text-white"
          >
            {{ movie.Title }}
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style></style>
