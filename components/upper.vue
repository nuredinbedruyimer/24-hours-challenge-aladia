<template>
  <div class="bg-black lg:block hidden text-white md:p-8 lg:p-10">
    <div class="max-w-3xl mx-auto">
      <span class="font-bold text-blue-400 whitespace-nowrap">
        Business

        <span class="inline-flex mx-1 text-blue-200 mb-10">
          <Icon icon="mdi:chevron-right" />
        </span>
        Entrepreneurship
        <span class="inline-flex mx-1 text-blue-200">
          <Icon icon="mdi:chevron-right" />
        </span>
        Entrepreneurship Fundamentals
      </span>
      <h1 class="text-2xl md:text-3xl font-bold mb-4">
        Intro to Entrepreneurship: Get started as an Entrepreneur
      </h1>
      <p class="text-lg md:text-lg mb-6 w-[80%]">
        Learn everything you need to know to become an Entrepreneur. Master the
        concepts and coming up with great business ideas
      </p>
      <!-- Rating and Student Count -->
      <div class="flex items-center text-yellow-400 mb-4">
        <span class="text-xl font-semibold">4.5</span>
        <div class="flex items-center ml-1 pt-1">
          <Icon icon="mdi:star" class="text-yellow-500 inline-block" />
          <Icon icon="mdi:star" class="text-yellow-500 inline-block" />
          <Icon icon="mdi:star" class="text-yellow-500 inline-block" />
          <Icon icon="mdi:star" class="text-yellow-500 inline-block" />
          <Icon
            icon="ic:sharp-star-half"
            class="text-yellow-500 inline-block"
          />
        </div>
        <a href="#" class="ml-2 text-blue-400"
          >(<span class="underline">17588 ratings</span>)</a
        >
        <span class="ml-2 text-gray-300">111,086 students</span>
      </div>
      <!-- Creator and Last Updated -->
      <div class="text-gray-300 text-sm mb-6">
        Created by
        <a href="#" class="text-blue-400 underline">Evan Kimbrell</a>
      </div>
      <!-- Bottom Section for Language and Last Updated -->
      <div class="flex items-center text-gray-300 text-sm space-x-4">
        <span class="flex items-center">
          <Icon icon="mdi:new-releases" class="mr-1 text-white" /> Last updated
          11/2024
        </span>
        <span class="flex items-center">
          <Icon icon="mdi:web" class="mr-1" /> English
        </span>
        <span class="flex items-center">
          <Icon icon="f7:captions-bubble-fill" style="color: white" /> English
          [Auto], Indonesian [Auto] ,
          <button
            v-if="!isClicked"
            class="text-blue-400 underline cursor-pointer"
            @click="isClicked = true"
          >
            7 more
          </button>
        </span>
      </div>
      <p v-if="isClicked" class="text-sm w-[80%]">
        Italian [Auto], Korean [Auto], Polish [Auto], Portuguese [Auto],
        Romanian [Auto], Turkish [Auto], Vietnamese [Auto]
      </p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const isClicked = ref(false);
</script>
