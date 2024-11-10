<template>
    <div class="w-full relative">
      <section class="mb-6">
        <div :class="{'max-h-40 overflow-hidden': !showMore}" class="transition-all relative">
          <p class="mb-2 text-sm" v-for="(paragraph, index) in paragraphs" :key="index">
            {{ paragraph }}
          </p>
          <div v-if="!showMore" class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none"></div>
        </div>
      </section>
      
      <button @click="toggleShowMore" class="text-blue-500 hover:underline flex items-center">
        {{ showMore ? 'Show less' : 'Show more' }}
        <iconify-icon :icon="showMore ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="ml-1"></iconify-icon>
      </button>
    </div>
  </template>
  
  <script>
  import { Icon } from '@iconify/vue';
  
  export default {
    components: {
      IconifyIcon: Icon,
    },
    props: {
      text: String
    },
    data() {
      return {
        showMore: false,
      };
    },
    computed: {
      paragraphs() {
        return this.text.split('\n');
      }
    },
    methods: {
      toggleShowMore() {
        this.showMore = !this.showMore;
      },
    },
  };
  </script>
  
  <style scoped>
  /* No additional styles needed with Tailwind */
  </style>