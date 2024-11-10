<template>
  <div class="p-6 pl-0 relative max-w-2xl mx-auto mt-10 mb-10">
    <section class="mb-6">
      <h2 class="text-xl font-bold mb-2">Requirements</h2>
      <ul class="list-disc ml-5">
        <li>There are no prerequisites for this introductory course.</li>
      </ul>
    </section>

    <section class="mb-6 relative">
      <h2 class="text-xl font-bold mb-2">Description</h2>
      <div
        :class="{ 'max-h-72 overflow-hidden': !showMore }"
        class="transition-all"
      >
        <div>
          Starting your own business is scary. Really scary. How do you know if
          your idea is any good? Or if your customers will ever show up? How do
          you know... what you're doing AT ALL? There's no place, degree, or
          university that can teach you how to become a successful Entrepreneur.
          You just have to get out there and learn everything for yourself. One
          step at a time.... Right? Wrong. Entrepreneurship is not a mythical,
          illusive creature and it's not a secret that's hidden behind doors.
          You CAN learn how to become a successful Entrepreneur and you CAN
          learn how to prepare yourself. In this course, we're going to do just
          that. You're going to learn everything you need to know about being an
          Entrepreneur, like: The core concepts How to think like an
          Entrepreneur What you should care about and conversely ignore How to
          go about gathering the resources you need to tackle your dream And
          when you're completely ready to go toe to toe with any "veteran"
          business owner out there, you're going to learn something they wish
          they knew: How to consistently come up with insightful, actionable
          business ideas It's everything you need to get started. You'll go from
          0 to Entrepreneur in no time.
        </div>

        <p>
          --------------------------------------------------------------------------------------------------------------------
        </p>

        <div>
          About the instructor: Top rated Udemy Instructor with over 30,000 five
          star reviews. Teaches 11 different courses on Entrepreneurship, with
          over 500,000 students enrolled. All courses by the instructor have are
          rated an average of 4.97 out of 5 stars. + Worked as a VC and was in
          charge of deal flow in Silicon Valley. Oversaw investments in large
          companies like Facebook, LinkedIn, & Tesla. + Startup founder for 5
          years, raised 3 rounds of capital worth several millions of dollars. +
          Currently Director of a Digital Agency that specializes in taking
          ideas from raw concept all the way to launch. Who this course is for:
          Anyone interested in starting their own business and becoming self
          employed Anyone interested in becoming an Entrepreneur
        </div>
      </div>
      <div
        v-if="!showMore"
        class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent"
      ></div>
    </section>

    <section v-if="showMore" class="mb-6">
      <h2 class="text-xl font-bold mb-2">Who this course is for:</h2>
      <ul class="list-disc ml-5">
        <li>
          Anyone interested in starting their own business and becoming self
          employed
        </li>
        <li>Anyone interested in becoming an Entreprene</li>
      </ul>
    </section>

    <button
      @click="toggleShowMore"
      class="text-blue-500 hover:underline flex items-center"
    >
      {{ showMore ? "Show less" : "Show more" }}
      <iconify-icon
        :icon="showMore ? 'mdi:chevron-up' : 'mdi:chevron-down'"
        class="ml-1"
      ></iconify-icon>
    </button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    IconifyIcon: Icon,
  },
  data() {
    return {
      showMore: false,
    };
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style scoped></style>
