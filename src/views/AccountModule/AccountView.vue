<script setup lang="ts">
import MainLayout from "@/components/layout/MainLayout.vue";
import ScreenVue from "@/components/layout/Screen.vue";
</script>

<template>
  <MainLayout :show-search="true">
    <div class="py-10">
      <!-- Top section -->
      <ScreenVue>
        <div>
          <figure class="max-w-screen-sm pb-10 px-4 text center mx-auto">
            <div>
              <img
                class="w-24 h-24 md:w-38 md:h-38 rounded-full mx-auto object-cover"
                src="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
                alt=""
                width="384"
                height="512"
              />
            </div>
            <div class="pt-6 text-center md:text-left space-y-4">
              <blockquote>
                <p class="text-lg text-center font-medium">
                  My IMDB Api Profile, This site is not endorsed by or
                  affiliated with IMDb.com. It is just a demo. Lots here is the
                  owesome tailwindcss, I LOVE IT!
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-center text-pink-500">Nehemie</div>
                <div class="text-center text-slate-700 dark:text-slate-500">
                  Software Engineer, Kigali
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </ScreenVue>

      <!--  -->
      <!--  -->
      <div class="rounded-md bg-slate-900 min-h-[80vh]">
        <ScreenVue>
          <RouterView></RouterView>
        </ScreenVue>
      </div>
      <!--  -->
    </div>
  </MainLayout>
</template>

<style></style>
