<template>
  <header class="container fixed top-7 z-[5100]">
    <nav
      :class="{
        'max-w-screen-md': !scrolled,
        'animate-full-width': scrolled,
      }"
      class="bg-white border-gray-200 shadow rounded-full px-4 lg:px-6 py-4"
    >
      <div class="flex justify-between items-center mx-auto">
        <div class="relative flex gap-4">
          <div style="width: 40px; height: 40px" class="relative">
            <Eye
              eye-width="40px"
              eye-height="40px"
              pupil-height="10px"
              pupil-width="10px"
              borderWidth="8px"
              eye-padding="3px"
              :isSmallEye="false"
            />
          </div>
          <span
            class="self-center text-slate-600 text-xl font-semibold whitespace-nowrap"
          >
            Knowleducation
          </span>
        </div>

        <div class="flex items-center lg:order-2">
          <a
            href="#"
            class="text-white rounded-full bg-emerald-400 hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          >
            Contact Us
          </a>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 rounded bg-blue-700 lg:bg-transparent hover:text-blue-700 text-gray-700 lg:p-0"
                aria-current="page"
                >Courses</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >Contact Us</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >Lorem</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import Eye from "./Eye.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

// Define the type for the reactive variable
const scrolled = ref<boolean>(false);

// Define the type for the event handler function
const handleScroll = (): void => {
  scrolled.value = window.scrollY > 700;
};

// Listen for the scroll event when the component is mounted
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Remove the scroll event listener when the component is destroyed
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.animate-full-width {
  animation: fullWidthAnimation 0.3s ease;
}

@keyframes fullWidthAnimation {
  from {
    width: 768px;
  }
  to {
    width: 100%;
  }
}
</style>
