<template>
  <div class="flex-col items-center mb-4">
    <h2 class="text-lg font-bold">
      <a href="#" class="text-blue-600 underline">{{ instructor.name }}</a>
    </h2>
    <p class="text-gray-600">{{ instructor.tagline }}</p>
    <div class="flex items-center mt-2">
      <img :src="instructor.image" alt="Instructor" class="w-24 h-24 rounded-full mr-4" />
      <div class="flex flex-col items-start space-y-1 mt-2 text-sm text-gray-500">
        <div class="flex items-center">
          <iconify-icon icon="mdi:star" class="mr-3" />
          <span>{{ instructor.rating }} Instructor Rating</span>
        </div>
        <div class="flex items-center">
          <iconify-icon icon="solar:medal-ribbons-star-bold" class="mr-3" />
          <span>{{ instructor.reviews.toLocaleString() }} Reviews</span>
        </div>
        <div class="flex items-center">
          <iconify-icon icon="ic:sharp-people" class="mr-3" />
          <span>{{ instructor.students.toLocaleString() }} Students</span>
        </div>
        <div class="flex items-center">
          <iconify-icon icon="carbon:play-filled" class="mr-3" />
          <span>{{ instructor.courses }} Courses</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    IconifyIcon: Icon
  },
  props: {
    instructor: Object
  }
};
</script>
