<template>
  <div
    class="fixed right-36 w-[22rem] bg-white transition-all duration-500 shadow-md"
    :class="{ 'top-0': isSticky, 'top-28': !isSticky, hidden: isFooterVisible }"
    @scroll="handleScroll"
  >
    <!-- Sidebar Content -->
    <div v-if="!isSticky" class="relative">
      <img
        src="https://via.placeholder.com/150"
        alt="Course Preview"
        class="w-full h-40 object-cover"
      />
      <button class="absolute inset-0 flex items-center justify-center">
        <div class="bg-black bg-opacity-50 rounded-full p-2">
          <Icon icon="mdi:play-circle" class="h-10 w-10 text-white" />
        </div>
      </button>
      <p
        class="absolute bottom-2 left-0 right-0 text-center text-white font-bold"
      >
        Preview this course
      </p>
    </div>

    <div class="flex justify-evenly border-b">
      <button
        @click="activeTab = 'personal'"
        :class="{
          'border-b-2 border-black w-1/2': activeTab === 'personal',
          'text-gray-500 hover:text-gray-900 w-1/2': activeTab !== 'personal',
        }"
        class="py-2 font-semibold"
      >
        Personal
      </button>
      <button
        @click="activeTab = 'teams'"
        :class="{
          'border-b-2 border-black w-1/2': activeTab === 'teams',
          'text-gray-500 hover:text-gray-900 w-1/2': activeTab !== 'teams',
        }"
        class="py-2 font-semibold"
      >
        Teams
      </button>
    </div>

    <div class="p-6">
      <div v-if="activeTab === 'personal'">
        <h2 class="text-lg font-bold text-gray-800">
          Subscribe to Udemy’s top courses
        </h2>
        <p class="text-sm text-gray-600 mt-2">
          Get this course, plus 12,000+ of our top-rated courses, with Personal
          Plan.
          <a href="#" class="text-blue-900 font-bold underline">Learn more</a>
        </p>
        <button
          class="mt-4 w-full bg-purple-600 text-white py-3 font-bold hover:bg-purple-700"
        >
          Try Personal Plan for free
        </button>
        <p class="text-center text-gray-500 text-sm mt-2">
          Starting at $10.00 per month after trial<br />Cancel anytime
        </p>
        <div class="flex items-center justify-between my-4">
          <hr class="flex-grow border-gray-300" />
          <span class="mx-2 text-sm text-gray-500">or</span>
          <hr class="flex-grow border-gray-300" />
        </div>
        <div class="text-center mb-4">
          <p class="text-lg text-start font-bold">$39.99</p>
          <button
            class="w-full mt-3 border border-black py-3 font-bold hover:bg-gray-200"
          >
            Add to cart
          </button>
          <p class="text-gray-500 text-xs mt-3">
            30-Day Money-Back Guarantee<br />Full Lifetime Access
          </p>
        </div>
        <div class="flex justify-around text-sm text-blue-500 mb-4">
          <a
            href="#"
            class="text-black text-sm font-bold underline decoration-blue-800"
            >Share</a
          >
          <a
            href="#"
            class="text-black text-sm font-bold underline decoration-blue-800"
            >Gift this course</a
          >
          <a
            href="#"
            class="text-black text-sm font-bold underline decoration-blue-800"
            >Apply Coupon</a
          >
        </div>
        <div
          class="flex border-dashed border border-gray-300 py-2 mb-4 justify-between"
        >
          <p class="text-xs text-gray-600 w-[65%]">
            <span class="font-bold text-gray-500 text-sm">LETSLEARNNOW</span> is
            applied Udemy coupon
          </p>
          <button class="text-blue-800 w-[10%] text-3xl mr-5">×</button>
        </div>
        <div class="flex">
          <input
            type="text"
            placeholder="Enter Coupon"
            class="flex-grow border border-black p-2"
          />
          <button class="bg-[#2d2f31] text-white px-4 py-2 font-bold">
            Apply
          </button>
        </div>
      </div>
      <div v-else-if="activeTab === 'teams'">
        <img
          src="/logos/udemy-business-logo.svg"
          alt="Udemy"
          class="h-6 w-auto"
        />
        <p class="text-sm text-gray-600 mt-2 w-[80%]">
          Subscribe to this course and 27,000+ top-rated Udemy courses for your
          organization.
        </p>
        <button
          class="mt-4 w-full bg-purple-600 text-white py-3 font-bold hover:bg-purple-700"
        >
          Try Udemy Business
        </button>
        <ul class="text-sm text-gray-600 mt-4 space-y-2">
          <li class="flex items-start">
            <Icon
              icon="material-symbols-light:check"
              height="20"
              class="text-black mr-2 font-bold"
            />
            For teams of 2 or more users
          </li>
          <li class="flex items-start">
            <Icon
              icon="material-symbols-light:check"
              height="20"
              class="text-black mr-2 font-bold"
            />
            27,000+ fresh & in-demand courses
          </li>
          <li class="flex items-start">
            <Icon
              icon="material-symbols-light:check"
              height="20"
              class="text-black mr-2 font-bold"
            />
            Learning Engagement tools
          </li>
          <li class="flex items-start">
            <Icon
              icon="material-symbols-light:check"
              height="20"
              class="text-black mr-2 font-bold"
            />
            SSO and LMS Integrations
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "CourseSubscriptionComponent",
  components: {
    Icon,
  },
  data() {
    return {
      isSticky: false,
      isFooterVisible: false,
      activeTab: "personal",
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 300) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    handleFooterVisibility(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isFooterVisible = true;
        } else {
          this.isFooterVisible = false;
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    // Use IntersectionObserver to detect footer visibility in the layout
    const footerElement = document.querySelector("footer"); // Assuming the footer is a <footer> tag

    // Check if the footer exists
    if (footerElement) {
      const observer = new IntersectionObserver(this.handleFooterVisibility, {
        rootMargin: "0px 0px -100px 0px", // Trigger when footer is near the viewport
      });
      observer.observe(footerElement); // Observe the footer element in the layout
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* Additional styles can go here if needed */
</style>
