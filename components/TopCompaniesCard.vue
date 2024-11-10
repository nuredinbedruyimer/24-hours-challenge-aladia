<template>
  <div class="border border-gray-300 p-6 bg-white max-w-2xl mx-auto mt-10">
    <div class="">
      <h2 class="text-lg font-bold mb-2">
        Top companies offer this course to their employees
      </h2>
      <p class="text-sm text-gray-600 mb-4">
        This course was selected for our collection of top-rated courses trusted
        by businesses worldwide.
        <a href="#" class="text-blue-600 hover:underline">Learn more</a>
      </p>
      <div class="flex justify-between items-center space-x-4">
        <img src="/logos/nasdaq-dark-logo.svg" alt="Nasdaq" class="h-10" />
        <img
          src="/logos/volkswagen-dark-logo.svg"
          alt="Volkswagen"
          class="h-10"
        />
        <img src="/logos/box-dark-logo.svg" alt="Box" class="h-10" />
        <img src="/logos/netapp-dark-logo.svg" alt="NetApp" class="h-10" />
        <img
          src="/logos/eventbrite-dark-logo.svg"
          alt="Eventbrite"
          class="h-10"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCompaniesCard",
};
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
