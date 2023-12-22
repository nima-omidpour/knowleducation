<template>
  <div
    class="relative p-4 w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg transition-transform duration-300 transform hover:-translate-y-2"
  >
    <div class="py-1">
      <div class="rounded w-full bg-gray-200">
        <img :src="image" alt="" class="h-60 w-full rounded-md" />
      </div>
      <p class="text-md text-slate-400 mt-4 leading-8">{{ desc }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["image", "desc"]);
const { image, desc } = props as {
  image: string;
  desc: string;
};
</script>
