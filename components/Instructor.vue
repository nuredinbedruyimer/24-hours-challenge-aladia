<template>
  <div class="max-w-2xl mx-auto p-6 pl-0 bg-white rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Instructor</h2>
    <InstructorDetails :instructor="instructor" />
    <RetractableParagraph :text="instructor.bio" />
  </div>
</template>

<script>
import InstructorDetails from "./InstructorDetails.vue";
import RetractableParagraph from "./RetractableParagraph.vue";

export default {
  components: {
    InstructorDetails,
    RetractableParagraph,
  },
  data() {
    return {
      instructor: {
        name: "Evan Kimbrell",
        tagline: "Founder of Sprintkick | Ex-VC | Ex-startup founder",
        image: "https://via.placeholder.com/150",
        rating: 4.5,
        reviews: 145210,
        students: 1060576,
        courses: 24,
        bio: `        Currently, I'm the Founder and Director of Sprintkick, a full-service, referral-only digital agency based out of San Francisco. Over the past four years I've overseen the development and launch of over 100 web and mobile apps. Clients range from two-man bootstrapping startups to multibillion dollar Fortune 100s like Wal-Mart, Dick's Sporting Goods, and GNC. 

Prior to Sprintkick I worked as a VC for a new firm called Juvo Capital, based out of L.A. I spearheaded the firm's expansion into Silicon Valley and into the Consumer Web tech category.

                  In the long long ago, I was a co-founder for an educational software startup called ScholarPRO that raised a ton of money and then spectacularly blew up (in the bad way). Before it exploded like the Death Star, I went through five tech incubators (yes, five): Tech Stars, Excelerate Labs, MassChallenge, Babson Venture Program, and Sparkseed. 

                  Hope you enjoy my courses!

`,
      },
    };
  },
};
</script>

<style scoped>
/* No additional styles needed with Tailwind */
</style>
