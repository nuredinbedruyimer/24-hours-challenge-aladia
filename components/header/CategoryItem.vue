<template>
  <li class="relative group">
    <a
      href="#"
      class="flex justify-between items-center text-gray-800 hover:text-blue-500"
    >
      {{ name }}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
