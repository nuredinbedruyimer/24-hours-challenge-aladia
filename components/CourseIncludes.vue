<template>
  <div class="max-w-2xl mx-auto mt-10">
    <div class="max-w-lg">
      <h2 class="text-xl font-bold mb-4">This course includes:</h2>
      <div class="grid grid-cols-2 gap-4">
        <IconWithText
          icon="material-symbols:play-circle-outline"
          text="7 hours on-demand video"
        />
        <IconWithText icon="fe:mobile" text="Access on mobile and TV" />
        <IconWithText
          icon="heroicons-outline:folder-download"
          text="4 downloadable resources"
        />
        <IconWithText
          icon="material-symbols:play-circle-outline"
          text="6 hours on-demand video"
        />
        <IconWithText
          icon="material-symbols-light:trophy-outline"
          text="Certificate of completion"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconWithText from "./IconWithText.vue";

export default {
  components: {
    IconWithText,
  },
};
</script>

<style scoped>
/* Tailwind handles layout, so scoped styles are not needed */
</style>
