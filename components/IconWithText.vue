<template>
    <div class="flex items-center space-x-2">
      <Icon :icon="icon" width="24" height="24" class="text-black" />
      <span class="text-sm font-medium">{{ text }}</span>
    </div>
  </template>
  
<script setup>
import { Icon } from '@iconify/vue';
</script>

  <script>
  export default {
    props: {
      icon: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tailwind handles the styles; no extra CSS needed */
  </style>
  