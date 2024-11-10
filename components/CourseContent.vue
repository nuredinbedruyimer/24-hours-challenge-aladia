<template>
  <div>
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" class="py-2 px-2">
          <div class="flex justify-between">
            <div class="flex gap-4 items-center">
              <AccordionTrigger></AccordionTrigger>
              <p class="text-md font-bold text-black">{{ course.text }}</p>
            </div>
            <div>
              <span class="text-sm font-normal">
                {{ course.lectureNumber }} lectures. {{ course.duration }}
              </span>
            </div>
          </div>

          <AccordionContent>
            <div>
              <!-- Iterate over items and pass each one to AccordionContentList -->
              <AccordionContentList
                v-for="(item, index) in items"
                :key="index"
                :item="item"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion/index.ts";
import AccordionContentList from "./AccordionContentList.vue"; // Import the new component

const items = [
  {
    icon: "material-symbols:play-circle-outline",
    title: "Intro to Section 10",
    duration: "01:48",
    type: "video",
  },
  {
    icon: "material-symbols:play-circle-outline",
    title: "The Fit quadrant: Hobbies & Passions",
    duration: "09:18",
    type: "video",
  },
  {
    icon: "material-symbols:play-circle-outline",
    title: "The Fit quadrant: Skills & Experiences",
    duration: "06:32",
    type: "video",
  },
  {
    icon: "material-symbols:edit-document-outline",
    title: "ACTIVITY: Hobbies, Passions, Skills, & Experience",
    duration: "02:20",
    type: "file",
  },
  {
    icon: "material-symbols:description-outline",
    title: "WORKSHEET: Hobbies, passions, skills, & experience",
    pages: "7 pages",
    type: "file",
  },
  {
    icon: "material-symbols:edit-document-outline",
    title: "ACTIVITY: List out your goals",
    duration: "05:47",
    type: "file",
  },
  {
    icon: "material-symbols:description-outline",
    title: "WORKSHEET: Fill out your goals",
    pages: "2 pages",
    type: "file",
  },
  {
    icon: "material-symbols:play-circle-outline",
    title: "The 3 business types: Pick yours",
    duration: "13:22",
    type: "video",
  },
  {
    icon: "material-symbols:play-circle-outline",
    title: "How good does my idea have to be?",
    duration: "09:49",
    type: "video",
  },
  {
    icon: "material-symbols:play-circle-outline",
    title: "The Eureka Myth",
    duration: "09:08",
    type: "video",
  },
  {
    icon: "material-symbols:description-outline",
    title: "Section 10 review material",
    pages: "52 pages",
    type: "file",
  },
  {
    icon: "material-symbols:quiz-outline",
    title: "Making it fit",
    questions: "5 questions",
    type: "question",
  },
];
defineProps({
  course: {
    type: Object,
    required: true,
  },
});
</script>
