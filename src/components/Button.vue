<script setup lang="ts">
defineProps({
  type: {
    type: String as () => "primary" | "default",
    default: "default",
  },
});
</script>

<template>
  <button
    :class="type"
    class="Button text-sm rounded flex items-center gap-x-2"
  >
    <slot></slot>
  </button>
</template>

<style>
.Button {
  @apply transition-all;
  @apply py-2 px-8 text-sm;
  @apply md:py-4 md:px-10 md:text-base;
}
.Button.default {
  @apply bg-slate-50/10 text-slate-100;
}
.Button.primary {
  @apply bg-pink-700 text-slate-200;
}
</style>
