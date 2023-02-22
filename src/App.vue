<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import img from "@/assets/images/hero-dark@90.dba36cdf.jpg";
</script>

<template>
  <div
    class="min-h-screen bg-opacity-20 bg-cover text-white"
    :style="{
      backgroundImage: `url(${img})`,
    }"
  >
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
