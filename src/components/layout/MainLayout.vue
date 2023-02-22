<script setup lang="ts">
import FooterVue from "./Footer.vue";
import NavBarVue from "./NavBar.vue";
import Screen from "./Screen.vue";

defineProps({
  showSearch: {
    type: Boolean,
    required: true,
  },
});

</script>

<template>
  <div class="min-h-[80vh] pt-20">
    <!--  -->
    <header class="fixed top-0 w-full left-0">
      <NavBarVue :showSearch="showSearch"></NavBarVue>
    </header>
    <!--  -->
    <main>
      <Screen>
        <slot></slot>
      </Screen>
    </main>
    <!--  -->
    <footer>
      <FooterVue></FooterVue>
    </footer>
  </div>
</template>

<style></style>
