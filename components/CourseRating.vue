<template>
  <div class="max-w-3xl mx-auto p-6 pl-0 bg-white">
    <div class="flex items-center mb-6">
      <iconify-icon icon="mdi:star" class="text-yellow-500 mr-2"></iconify-icon>
      <span class="text-xl font-bold">4.5 course rating · 5K ratings</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10">
      <ReviewCard
        v-for="(review, index) in reviews"
        :key="index"
        :review="review"
      />
    </div>
    <button
      class="mt-6 border border-gray-800 px-4 py-2 hover:bg-gray-100 font-bold text-gray-700"
    >
      Show all reviews
    </button>
  </div>
</template>

<script>
import ReviewCard from "./ReviewCard.vue";
import { Icon } from "@iconify/vue";
export default {
  components: {
    ReviewCard,
    IconifyIcon: Icon,
  },
  data() {
    return {
      reviews: [
        {
          initials: "RB",
          name: "Richard B.",
          rating: 5,
          time: "a week ago",
          text: "It was informative and concise, there was no room for questions as all of them were duly answered within the lectures.",
        },
        {
          initials: "MR",
          name: "Mr David Ryan R.",
          rating: 5,
          time: "a month ago",
          text: "I have been a Maintenance Engineer for almost twenty years now and these first few videos have made me realise that my friends were always right and that I have failed so many times, in by doing so that I have learnt a lot...",
        },
        {
          initials: "QA",
          name: "Quyria A.",
          rating: 5,
          time: "2 months ago",
          text: "muito bom. O curso é bem objetivo, o instrutor aborda os temas de forma clara e faz com que a aula seja imersiva.",
        },
        {
          initials: "EA",
          name: "Endre A.",
          rating: 5,
          time: "3 months ago",
          text: "Excellent insights into entrepreneurship provide many tips on how to start your own business",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* No additional styles needed with Tailwind */
</style>
