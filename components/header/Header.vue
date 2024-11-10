<template>
  <header class="text-black w-full">
    <nav class="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img
            src="/logos/udemy-dark-logo.svg"
            alt="Udemy"
            class="h-8 w-auto"
          />
        </NuxtLink>
        <div class="relative group">
          <button class="text-sm">Categories</button>
          <!-- Dropdown Menu that appears on hover -->
          <DropdownMenu />
        </div>
      </div>

      <div
        class="flex items-center flex-1 max-w-md min-w-[45%] mx-4 border border-black rounded-full bg-gray-100"
      >
        <Icon
          icon="material-symbols:search"
          width="24"
          height="24"
          class="text-gray-500 ml-4"
        />
        <input
          type="text"
          placeholder="Search for anything"
          class="w-full px-4 py-3 rounded-full bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div class="flex gap-4">
        <div class="group relative">
          <NuxtLink
            to="/signup"
            class="relative text-sm z-40 px-4 text-black transition-colors hover:text-purple-600 py-2"
          >
            Udemy Business
          </NuxtLink>
          <!-- Card for Teach on Udemy -->
          <div
            class="absolute top-full w-[300px] z-50 left-0 mt-2 hidden group-hover:flex flex-col items-start bg-white shadow-lg rounded-md p-4 border border-gray-200"
          >
            <p class="text-gray-800 text-md font-bold mb-2">
              Get your team access to over 27,000 top Udemy courses, anytime,
              anywhere.
            </p>
            <NuxtLink
              to="/teach"
              class="bg-slate-900 text-white text-xs font-semibold py-4 px-3 w-full text-center hover:bg-slate-950"
            >
              Get Started
            </NuxtLink>
          </div>
        </div>
        <div class="group relative">
          <NuxtLink
            to="/signup"
            class="relative text-sm px-4 text-black transition-colors hover:text-purple-600 py-2"
          >
            Teach on Udemy
          </NuxtLink>
          <!-- Card for Teach on Udemy -->
          <div
            class="absolute top-full w-[300px] left-0 mt-2 hidden group-hover:flex flex-col items-start bg-white shadow-lg rounded-md p-4 border border-gray-200"
          >
            <p class="text-gray-800 text-sm mb-2">
              Become an instructor and share your knowledge.
            </p>
            <NuxtLink
              to="/teach"
              class="bg-slate-900 text-white text-xs font-semibold py-4 px-3 w-full text-center hover:bg-slate-950"
            >
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="flex items-center space-x-6">
        <!-- Login/Signup Links -->

        <NuxtLink
          to="/login"
          class="relative text-sm font-bold hover:text-purple-500 transition-colors"
        >
          <Icon icon="mdi:cart-outline" class="w-6 h-6"
        /></NuxtLink>
        <NuxtLink
          to="/login"
          class="relative text-sm font-bold px-4 hover:bg-gray-100 transition-colors border border-gray-600 px py-2"
          >Login</NuxtLink
        >
        <NuxtLink
          to="/signup"
          class="relative text-sm font-bold px-4 bg-slate-800 text-white transition-colors border border-gray-600 px py-2"
          >Sign Up</NuxtLink
        >

        <!-- Cart Icon -->
        <NuxtLink
          to="/cart"
          class="relative text-sm font-bold px-4 hover:bg-gray-100 transition-colors border border-gray-600 px py-3"
        >
          <Icon icon="mdi:web" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import DropdownMenu from "./DropdownMenu.vue";
</script>

<style scoped>
/* Additional styling if needed */
</style>
