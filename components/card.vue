<template>
  <div
    class="grid grid-cols-2 gap-4 border border-gray p-6 max-w-2xl bg-white mt-10 mx-auto"
  >
    <h2 class="text-2xl font-bold mb-4 col-span-2">What you'll learn</h2>
    <div>
      <ul class="space-y-3 relative">
        <li
          v-for="(item, index) in showMore
            ? leftColumnItems
            : leftColumnItems.slice(0, 3)"
          :key="index"
          class="flex items-start"
        >
          <Icon
            icon="material-symbols-light:check"
            width="32"
            height="32"
            class="text-black mr-2 font-bold"
          />
          <span>{{ item }}</span>
        </li>
        <!-- Apply blur effect when not showing all items -->
        <div
          v-if="!showMore"
          class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"
        ></div>
      </ul>
    </div>
    <div class="ml-4">
      <ul class="space-y-3 relative">
        <li
          v-for="(item, index) in showMore
            ? rightColumnItems
            : rightColumnItems.slice(0, 3)"
          :key="index"
          class="flex items-start"
        >
          <Icon
            icon="material-symbols-light:check"
            width="32"
            height="32"
            class="text-black mr-2 font-bold"
          />
          <span>{{ item }}</span>
        </li>
        <!-- Apply blur effect when not showing all items -->
        <div
          v-if="!showMore"
          class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"
        ></div>
      </ul>
    </div>

    <!-- Show More button -->
    <button
      v-if="!showMore"
      @click="showMore = true"
      class="col-span-2 text-blue-500 underline mt-4"
    >
      Show More
    </button>
    <button
      v-else
      @click="showMore = false"
      class="col-span-2 text-blue-500 underline mt-4"
    >
      Show Less
    </button>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const showMore = ref(false);
</script>

<script>
export default {
  data() {
    return {
      leftColumnItems: [
        "Understand and apply all the core concepts of Entrepreneurship",
        "Assess their own personality through the lens of Entrepreneurship & know how to find partners that have what they are lacking",
        "Understand the Optimistic Deterministic framework of the future.",
        "Align their efforts with the correct type of entrepreneur they want to become",
        "Pick between what type of business best suits them",
        "Understand and apply the concept of Scalability as an assessment tool",
        "Assess what skills and passions they have and apply them towards ideation",
        "Use 5 different techniques for easy validation of a business idea",
        "Understand how to create a pitch experiment & MVP based off their business idea",
        "Plan a strategy for attracting and pitching angel investors and venture capital",
      ],
      rightColumnItems: [
        "Understand the importance of UX & Design Thinking for application design projects.",
        "Learn a new way to break down larger problem sets into chunks that more clearly identify the problems.",
        "Understand the Optimistic Deterministic framework of the future.",
        "Align their efforts with the correct type of entrepreneur they want to become",
        "Pick between what type of business best suits them",
        "Understand and apply the concept of Scalability as an assessment tool",
        "Assess what skills and passions they have and apply them towards ideation",
        "Use 5 different techniques for easy validation of a business idea",
        "Understand how to create a pitch experiment & MVP based off their business idea",
        "Plan a strategy for attracting and pitching angel investors and venture capital",
      ],
    };
  },
};
</script>

<style scoped>
/* Tailwind utility classes handle styling */
</style>
