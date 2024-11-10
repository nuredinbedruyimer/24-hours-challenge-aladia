<template>
  <div class="border-t border-gray-300 p-4 pl-0 relative" @click.stop>
    <div class="flex items-center justify-between mb-5">
      <div class="flex items-center">
        <div
          class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-lg font-bold mr-3"
        >
          {{ review.initials }}
        </div>
        <div>
          <div class="font-bold">{{ review.name }}</div>
          <div class="flex items-center text-sm text-gray-500">
            <span class="flex items-center">
              <iconify-icon
                icon="mdi:star"
                v-for="i in review.rating"
                :key="i"
                class="text-yellow-500"
              ></iconify-icon>
            </span>
            <span class="ml-2">{{ review.time }}</span>
          </div>
        </div>
      </div>
      <div class="relative">
        <iconify-icon
          icon="mdi:dots-vertical"
          class="text-gray-900 cursor-pointer text-xl"
          @click="toggleOptions"
        ></iconify-icon>
        <div
          v-if="optionsVisible"
          class="absolute right-0 mt-2 w-22 h-14 bg-white border border-gray-300 shadow-lg"
        >
          <ul class="h-full flex items-center justify-center">
            <li
              @click="report"
              class="px-4 py-2 cursor-pointer font-bold text-gray-700 text-center hover:text-purple-700"
            >
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-gray-700">{{ review.text }}</p>
    <div class="flex items-center mt-4 text-sm text-gray-500">
      <span class="mr-2">Helpful?</span>
      <iconify-icon icon="mdi:thumb-up-outline" class="mr-3"></iconify-icon>
      <iconify-icon icon="mdi:thumb-down-outline"></iconify-icon>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    IconifyIcon: Icon,
  },
  props: {
    review: Object,
  },
  data() {
    return {
      optionsVisible: false,
    };
  },
  methods: {
    toggleOptions() {
      this.optionsVisible = !this.optionsVisible;
    },
    report() {
      alert("Reported");
      this.optionsVisible = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.optionsVisible = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
/* No additional styles needed with Tailwind */
</style>
