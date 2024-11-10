<template>
  <div class="flex items-start mb-4 relative">
    <img :src="image" alt="Course" class="w-48 h-28 object-cover mr-4" />
    <div class="flex-1 max-w-md">
      <div class="max-w-[22rem]">
        <h3 class="text-s font-bold">{{ title }}</h3>
      </div>
      <p class="text-sm text-gray-600">{{ instructor }}</p>
      <div class="text-sm flex items-center">
        {{ rating }}
        <div class="flex items-center ml-1 pt-1">
          <iconify-icon icon="mdi:star" class="text-yellow-500 inline-block" />
          <iconify-icon icon="mdi:star" class="text-yellow-500 inline-block" />
          <iconify-icon icon="mdi:star" class="text-yellow-500 inline-block" />
          <iconify-icon icon="mdi:star" class="text-yellow-500 inline-block" />
          <iconify-icon
            icon="ic:sharp-star-half"
            class="text-yellow-500 inline-block"
          />
        </div>
        <span class="text-gray-500 ml-1">({{ reviews }})</span>
      </div>
    </div>
    <div class="text-lg font-bold text-right self-start">${{ price }}</div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    IconifyIcon: Icon,
  },
  props: {
    image: String,
    title: String,
    instructor: String,
    rating: String,
    reviews: Number,
    price: Number,
  },
};
</script>
