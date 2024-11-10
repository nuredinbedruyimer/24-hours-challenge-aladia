<template>
  <div class="flex flex-col justify-between max-w-2xl mx-auto mt-10 w-full">
    <h3 class="text-2xl font-bold">Course content</h3>
    <div class="flex justify-between items-center mt-7 mb-2">
      <p class="">14 sections • 91 lectures • 14h 16m total length</p>
      <a href="#" class="text-purple-600 font-bold hover:underline"
        >Expand all sections</a
      >
    </div>
    <div class="border-2 flex-1 border-gray-100 bg-gray-100">
      <div v-for="accordian in accordianLists" :key="accordian.text">
        <CourseContents :course="accordian" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseContents from "./CourseContent.vue";

const accordianLists = [
  {
    status: "Completed",
    text: "Introduction to the course (10 minutes)",
    time: "2024-11-08",
    lectureNumber: 4,
    duration: "8 minutes",
  },
  {
    status: "In Progress",
    text: "What is an Entrepreneur? (18 minutes)",
    time: "2024-11-05",
    lectureNumber: 7,
    duration: "15 minutes",
  },
  {
    status: "Not Started",
    text: "The Entrepreneurial Mindset (20 minutes)",
    time: "2024-11-07",
    lectureNumber: 7,
    duration: "13 minutes",
  },
  {
    status: "Completed",
    text: "The different paths you can take (16 minutes)",
    time: "2024-11-01",
    lectureNumber: 6,
    duration: "12 minutes",
  },
  {
    status: "Completed",
    text: "Core concepts & frameworks (24 minutes)",
    time: "2024-10-28",
    lectureNumber: 7,
    duration: "19 minutes",
  },
  {
    status: "In Progress",
    text: "Validating your idea (35 minutes)",
    time: "2024-10-27",
    lectureNumber: 7,
    duration: "17 minutes",
  },
  {
    status: "Not Started",
    text: "Fundraising (50 minutes)",
    time: "2024-10-25",
    lectureNumber: 9,
    duration: "20 minutes",
  },
  {
    status: "In Progress",
    text: "Introduction to Idea Generation (6 minutes)",
    time: "2024-10-24",
    lectureNumber: 4,
    duration: "7 minutes",
  },
  {
    status: "In Progress",
    text: "Laying the groundwork (44 minutes)",
    time: "2024-10-24",
    lectureNumber: 5,
    duration: "18 minutes",
  },
  {
    status: "In Progress",
    text: "Making it fit (60 minutes)",
    time: "2024-10-24",
    lectureNumber: 11,
    duration: "16 minutes",
  },
];
</script>
