<script setup lang="ts">
import MainLayout from "@/components/layout/MainLayout.vue";
import MovieCardVue from "@/components/MovieCard.vue";
import spinnerVue from "@/components/spinner.vue";
import { useSearchStore } from "@/stores";
import { useTitle } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const { q, results, isLoading } = storeToRefs(useSearchStore());
const { fetchResults } = useSearchStore();
const route = useRoute();

function search() {
  useTitle(`OMDb Searching for ${route.params.q}`);
  q.value = route.params.q as string;
  fetchResults();
}
watch(
  () => route.params.q,
  () => {
    search();
  }
);

onMounted(() => {
  search();
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
      <!--  -->
      <!-- else -->
      <div v-if="!isLoading" class="py-6">
        <!-- Results Overview -->
        <div>
          <div class="pb-6 flex justify-between w-full text-sm">
            <div>
              Searching for <b>{{ route.params.q }}</b>
            </div>
            <div>
              Found <b>{{ results.data.totalResults ?? 0 }}</b> results
            </div>
          </div>
          <!--  -->
          <div v-if="results.data.Error" class="py-12 text-center">
            {{ results.data.Error }}
          </div>
        </div>
        <!--  -->
        <div
          class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-4"
        >
          <MovieCardVue
            v-for="movie of results.data.Search"
            :key="movie.Title + movie.imdbID"
            :movie="movie"
          />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style></style>
