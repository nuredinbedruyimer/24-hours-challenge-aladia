<template>
  <div
    class="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-72"
  >
    <ul class="space-y-2 p-2">
      <!-- Loop through the categories array and create a CategoryItem for each -->
      <CategoryItem
        v-for="(category, index) in categories"
        :key="index"
        :name="category"
      />
    </ul>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";

export default {
  components: {
    CategoryItem,
  },
  data() {
    return {
      // Array of categories
      categories: [
        "Certification Preparation",
        "Development",
        "Business",
        "Finance & Accounting",
        "IT & Software",
        "Office Productivity",
        "Personal Development",
        "Design",
        "Marketing",
        "Lifestyle",
        "Photography & Video",
        "Health & Fitness",
        "Music",
        "Teaching & Academics",
      ],
    };
  },
};
</script>
