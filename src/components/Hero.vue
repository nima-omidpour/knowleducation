<template>
  <div
    class="hero border flex flex-col justify-center border-t-4 border-t-emerald-500 bg-slate-100 mb-10"
  >
    <div class="container mt-20">
      <Header class="mb-10" />
      <div class="flex">
        <div class="content flex-none w-1/2">
          <h1
            style="font-size: 64px"
            class="header font-righteous text-gray-700 font-bold"
          >
            Learn <span class="edge relative">Edge</span> Cases
          </h1>
          <p class="text-gray-500 leading-10 text-lg my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore,
            quas, inventore at architecto odio recusandae natus veniam itaque
            illo cupiditate praesentium aspernatur odit, sint beatae ullam
            facere. Reiciendis, necessitatibus.
          </p>
          <div
            style="width: 70%"
            class="flex items-center py-3 justify-around rounded-full bg-white"
          >
            <input
              type="text"
              placeholder="What do you want to learn?"
              class="border-none border-gray-300 rounded-l py-2 px-4 w-64 focus:outline-none focus:border-blue-500"
            />

            <button
              class="text-white rounded-full bg-emerald-400 hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
        <div
          style="width: 300px; height: 300px"
          class="eye-container flex-none w-1/2 ml-24"
        >
          <Eye
            eye-width="300px"
            eye-height="300px"
            pupil-height="60px"
            pupil-width="60px"
            borderWidth="40px"
            eye-padding="30px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Eye from "./Eye.vue";
import Header from "./Header.vue";
</script>

<style scoped>
.hero {
  height: 530px;
}

.edge::after {
  content: "";
  position: absolute;
  left: -10px;
  bottom: -15px;
  width: calc(100% + 20px);
  height: 10px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 248, 0, 1) 18%,
    rgba(0, 219, 255, 1) 100%
  );
  clip-path: polygon(100% 9%, 100% 100%, 0% 64.75%, 0% 35.75%);
  border-radius: 10px;
}
</style>
