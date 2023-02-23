<script setup lang="ts">
import MainLayout from "@/components/layout/MainLayout.vue";
import Screen from "@/components/layout/Screen.vue";
import Spinner from "@/components/spinner.vue";
import { storeToRefs } from "pinia";
import { capitalize, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMovieStore } from "../../stores";
import Bookmark from "./Bookmark.vue";

const router = useRouter();
const route = useRoute();

const { isLoading, result } = storeToRefs(useMovieStore());
const { fetchResults } = useMovieStore();

onMounted(() => {
  fetchResults(route.params.id as string);
});

const ratings = computed(() => {
  return [
    ...result.value.data.Ratings,
    ...[
      {
        Source: "IMDBRating",
        Value: result.value.data.imdbRating,
      },
      {
        Source: "Metascore",
        Value: result.value.data.Metascore,
      },
    ],
  ].filter((d) => d.Value !== undefined);
});
</script>

<template>
  <MainLayout :show-search="true">
    <Screen>
      <div class="py-6 text-slate-400">
        <!-- If loading -->
        <div v-show="isLoading" class="py-6 md:py-16 text-center">
          <Spinner>
            <div>Fetching results ...</div>
          </Spinner>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <div v-if="result.data">
          <div v-if="result.data.Error" class="py-12 text-center">
            {{ result.data.Error }}
          </div>
          <!--  -->
          <div v-else-if="result.data" class="max-w-screen-lg mx-auto">
            <div class="grid grid-cols-12 gap-x-8 gap-y-4">
              <!-- Left Side  -->
              <div class="col-span-12 md:col-span-5">
                <!-- Poster -->
                <img
                  class="mx-auto md:mx-0 h-[400px] lg:h-[600px] w-auto lg:w-full object-cover rounded-md"
                  :src="result.data.Poster"
                  :alt="result.data.Title"
                />
                <!--  -->
                <div class="py-4 mx-auto">
                  <Bookmark :movie="result.data"></Bookmark>
                </div>
                <!--  -->
              </div>
              <!-- Right Side and Details -->
              <div class="col-span-12 md:col-span-7">
                <div class="px-2 md:px-2">
                  <div class="pb-6">
                    <div class="flex flex-col gap-y-4">
                      <!--  -->
                      <div>
                        <div>
                          <h3 class="text-white text-2xl font-semibold">
                            {{ capitalize(result.data.Type) }} :
                            {{ result.data.Title }}
                          </h3>
                        </div>
                        <div class="py-2 flex flex-col gap-y-1 text-base">
                          <div>Released - {{ result.data.Released }}</div>
                          <div>Country - {{ result.data.Country }}</div>
                          <div>Language - {{ result.data.Language }}</div>
                        </div>
                      </div>
                      <!--  -->
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col gap-y-8">
                    <!--  -->
                    <div v-if="result.data.Plot" class="flex flex-col gap-y-2">
                      <h3
                        class="mb-2 text-white text-base font-semibold underline underline-offset-8"
                      >
                        Description
                      </h3>
                      <p>
                        {{ result.data.Plot }}
                      </p>
                    </div>
                    <div v-if="result.data.Awards" class="flex flex-col">
                      <h3
                        class="mb-2 text-white text-base font-semibold underline underline-offset-4"
                      >
                        Awards
                      </h3>
                      <p>
                        {{ result.data.Awards }}
                      </p>
                    </div>
                    <!--  -->
                    <div v-if="result.data.Director" class="flex flex-col">
                      <h3
                        class="mb-2 text-white text-base font-semibold underline underline-offset-4"
                      >
                        Director
                      </h3>
                      <p>
                        {{ result.data.Director }}
                      </p>
                    </div>
                    <!--  -->
                    <div v-if="result.data.Writer" class="flex flex-col">
                      <h3
                        class="mb-2 text-white text-base font-semibold underline underline-offset-4"
                      >
                        Writer
                      </h3>
                      <p>
                        {{ result.data.Writer }}
                      </p>
                    </div>
                    <!--  -->
                    <div v-if="result.data.Actors" class="flex flex-col">
                      <h3
                        class="mb-2 text-white text-base font-semibold underline underline-offset-4"
                      >
                        Actors
                      </h3>
                      <p>
                        {{ result.data.Actors }}
                      </p>
                    </div>

                    <!--  -->
                    <div class="flex flex-col">
                      <h3
                        class="mb-3 text-white text-base font-semibold underline underline-offset-4"
                      >
                        Rating
                      </h3>
                      <div class="flex flex-col gap-y-2">
                        <div v-for="rate of ratings" :key="rate.Source">
                          <div class="flex gap-x-2 text-sm">
                            <span>{{ rate.Source }}</span>
                            <span class="text-yellow-600">{{
                              rate.Value
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  </MainLayout>
</template>

<style></style>
