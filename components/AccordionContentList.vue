<!-- AccordionContentList.vue -->
<template>
  <div class="flex items-center gap-4 py-2 ml-8">
    <Icon icon="mdi:desktop-mac" class="text-gray-600 text-2xl" />
    <div class="flex justify-between w-full">
      <a
        v-if="item.type === 'video'"
        class="text-sm text-blue-400 cursor-pointer underline"
        >{{ item.title }}</a
      >
      <p v-else class="text-sm">{{ item.title }}</p>

      <p v-if="item.duration" class="text-sm text-gray-500">
        {{ item.duration }}
      </p>
      <p v-else-if="item.pages" class="text-sm text-gray-500">
        {{ item.pages }}
      </p>
      <p
        v-else-if="item.questions"
        class="text-sm font-extralight text-blue-500"
      >
        preview
      </p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Add any specific styles for AccordionContentList here */
</style>
