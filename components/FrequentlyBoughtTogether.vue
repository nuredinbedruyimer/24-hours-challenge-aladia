<template>
  <div class="border border-gray-300 p-6 max-w-2xl mx-auto mt-10">
    <h2 class="text-xl font-bold mb-6">Frequently Bought Together</h2>
    <div class="relative">
      <CourseCard
        image="https://via.placeholder.com/150"
        title="Intro to Entrepreneurship: Get started as an Entrepreneur"
        instructor="Evan Kimbrell"
        rating="4.6"
        reviews="17,558"
        price="69.99"
      />
      <div class="absolute left-20 top-24 z-10 flex">
        <div class="rounded-full bg-white border border-gray-300 p-2">
          <iconify-icon
            icon="mdi:plus"
            class="text-gray-800"
            height="24"
            width="24"
          />
        </div>
      </div>
      <CourseCard
        image="https://via.placeholder.com/150"
        title="MBA Business Tools That Get Results--Free Workbooks Included"
        instructor="Warren Chalklen, PhD"
        rating="4.5"
        reviews="102"
        price="19.99"
      />
      <div class="absolute left-20 top-56 z-10 flex">
        <div class="rounded-full bg-white border border-gray-300 p-2">
          <iconify-icon
            icon="mdi:plus"
            class="text-gray-800"
            height="24"
            width="24"
          />
        </div>
      </div>
      <CourseCard
        image="https://via.placeholder.com/150"
        title="Photoshop for Entrepreneurs - Design 11 Practical Projects"
        instructor="Phil Ebiner, Jeremy Deighan - 300,000+ Students, Video…"
        rating="4.6"
        reviews="1,583"
        price="44.99"
      />
    </div>
    <div
      class="flex flex-col gap-4 sm:justify-between sm:flex-row items-center mt-6"
    >
      <div class="text-lg">
        Total: <span class="text-black font-bold">$169.97</span>
      </div>
      <button
        class="bg-purple-500 text-white py-2 px-4 font-bold hover:bg-purple-600"
      >
        Add all to cart
      </button>
    </div>
  </div>
</template>

<script>
import CourseCard from "./CourseCard.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    CourseCard,
    IconifyIcon: Icon,
  },
};
</script>
