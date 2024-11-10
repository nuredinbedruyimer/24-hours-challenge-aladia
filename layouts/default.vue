<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Main content -->
    <NuxtPage />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/footer/Footer.vue";
import Header from "~/components/header/Header.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* Add styles for layout if necessary */
</style>
