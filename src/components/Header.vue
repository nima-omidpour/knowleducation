<script setup lang="ts">
import Eye from "./Eye.vue";
</script>
<template>
  <header class="container">
    <nav
      class="bg-white border-gray-200 max-w-screen-md rounded-full px-4 lg:px-6 py-4 dark:bg-gray-800"
    >
      <div class="flex justify-between items-center mx-auto">
        <div style="width: 40px; height: 40px" class="relative">
          <Eye
            eye-width="40px"
            eye-height="40px"
            pupil-height="10px"
            pupil-width="10px"
            borderWidth="8px"
            eye-padding="3px"
          />
        </div>

        <span
          class="self-center text-slate-600 text-xl font-semibold whitespace-nowrap dark:text-white"
        >
          Knowleducation
        </span>

        <div class="flex items-center lg:order-2">
          <a
            href="#"
            class="text-white rounded-full bg-emerald-400 hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
                class="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Courses</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >Contact Us</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >Lorem</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
