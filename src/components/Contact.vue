<template>
  <div class="contact mt-0 bg-slate-100">
    <div class="container">
      <div class="header flex gap-2 mb-10">
        <h1 class="font-righteous text-3xl text-gray-700 font-bold">
          Need any help...?
        </h1>
      </div>
    </div>

    <div class="container h-full bg-white rounded-xl py-10">
      <div class="form-container h-full w-full flex justify-around">
        <form class="flex flex-wrap">
          <div class="mb-5 w-full md:w-6/12">
            <div class="flex items-center mb-2">
              <label
                for="fullName"
                class="block text-md font-medium text-gray-500 dark:text-white"
              >
                Full Name
              </label>
              <p class="text-red-500 text-xs ml-2 custom-error:border-red-400">
                {{ fullNameError }}
              </p>
            </div>
            <input
              type="text"
              id="fullName"
              v-model="fullName"
              :class="fullNameError ? 'custom-error:border-red-400' : ''"
              class="bg-gray-50 outline-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-300 dark:focus:border-emerald-300 transition-all duration-200"
            />
          </div>
          <div class="mb-5 w-full md:w-6/12 md:pl-4">
            <div class="flex items-center mb-2">
              <label
                for="email"
                class="block font-md font-medium text-gray-500 dark:text-white"
              >
                Email
              </label>
              <p class="text-red-500 text-xs ml-2">{{ emailError }}</p>
            </div>
            <input
              type="email"
              id="email"
              v-model="email"
              :class="emailError ? 'custom-error:border-red-400' : ''"
              class="bg-gray-50 border outline-0 transition-all duration-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
          <div class="w-full">
            <div class="flex items-center mb-2">
              <label
                for="message"
                class="block font-md font-medium text-gray-500 dark:text-white"
              >
                Your message
              </label>
              <p class="text-red-500 text-xs ml-2">{{ messageError }}</p>
            </div>
            <textarea
              id="message"
              v-model="message"
              rows="4"
              :class="messageError ? 'custom-error:border-red-400' : ''"
              class="block p-2.5 w-full transition-all duration-200 text-sm outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
            ></textarea>
          </div>

          <button
            type="button"
            @click="handleSubmit"
            class="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-full text-sm w-full sm:w-auto px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <div
          class="phone-container w-400 h-300 flex justify-center items-center rounded-xl bg-yellow-100"
        >
          <i
            style="font-size: 100px"
            cla
            class="fa-solid text-yellow-400 fa-phone-flip"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fullName = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");

const fullNameError = ref<string>("");
const emailError = ref<string>("");
const messageError = ref<string>("");

const handleSubmit = (): void => {
  fullNameError.value = "";
  emailError.value = "";
  messageError.value = "";

  if (!fullName.value.trim()) {
    fullNameError.value = "Full Name is required";
  }

  if (!email.value.trim()) {
    emailError.value = "Email is required";
  } else if (!isValidEmail(email.value)) {
    emailError.value = "Invalid email address";
  }

  if (!message.value.trim()) {
    messageError.value = "Message is required";
  }

  if (!fullNameError.value && !emailError.value && !messageError.value) {
    console.log("Form submitted successfully!");
  }
};

const isValidEmail = (value: string): boolean => {
  return value.includes("@");
};
</script>

<style scoped></style>
