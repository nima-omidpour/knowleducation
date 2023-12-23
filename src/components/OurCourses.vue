<template>
  <div class="reasons mt-10 bg-slate-100 py-10">
    <div class="container">
      <div class="header flex gap-2 mb-10">
        <h1 class="font-righteous text-3xl text-gray-700 font-bold">
          Our Courses
        </h1>
        <div class="span w-10/12 border-t-2 border-t-slate-200 m-4"></div>
      </div>
      <div
        v-if="loading"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full"
      >
        <Selection :key="x" class="" v-for="x in 4" />
      </div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full"
      >
        <Card
          v-for="course in courses"
          :desc="course.desc"
          :image="course.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import Selection from "./Selection.vue";
import { ref, onMounted } from "vue";
interface Course {
  image: string;
  desc: string;
}
const courses = ref<Course[]>([]);
const loading = ref<boolean>(true);
onMounted(async () => {
  try {
    const response = await fetch("/api/courses");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    courses.value = await response.json();
    loading.value = false;
  } catch (error) {
    console.error("Error fetching data:", error);
    loading.value = false;
  }
});
</script>

<style scoped></style>
