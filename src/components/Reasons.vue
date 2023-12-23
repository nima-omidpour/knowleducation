<template>
  <div class="reasons my-10 bg-white">
    <div class="container">
      <div class="flex gap-14 items-center">
        <div class="cards flex flex-col gap-5">
          <div
            v-for="reason in reasons"
            class="group card items-center relative px-8 rounded-xl bg-white shadow-md flex gap-4 cursor-pointer transition-transform duration-300 transform-gpu"
          >
            <span
              style="font-size: 48px"
              class="step-counter -z-20 text-gray-200 opacity-75 text-2xl font-bold absolute right-0 rotate-45"
            >
              0nth
            </span>
            <div
              style="height: 100px; width: 100px"
              class="img-container flex justify-center rounded-full bg-yellow-100"
            >
              <img
                width="40"
                height="140"
                class="transition-transform translate-y-[-14px] duration-300 transform-gpu group-hover:rotate-[-10deg]"
                :src="reason.image"
                alt="hand"
              />
            </div>
            <div class="content absolute right-10 -z-20">
              <h1 class="font-righteous text-2xl text-gray-700 font-bold">
                {{ reason.title }}
              </h1>
              <p class="text-gray-500 font-md">
                {{ reason.desc }}
              </p>
            </div>
          </div>
        </div>
        <div class="content flex-none w-1/2">
          <h1
            style="font-size: 30px"
            class="header font-righteous text-em-700 font-bold"
          >
            choose Knowleducation <span class="over">over</span>

            <span
              class="absolute rotate-[-30deg] text-emerald-500 translate-y-[-75%]"
              >ALL</span
            >
            <span class="others"> others...!</span>
          </h1>
          <p class="text-gray-400 leading-10 text-lg my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore,
            quas, inventore at architecto odio recusandae natus veniam itaque
            illo cupiditate praesentium aspernatur odit, sint beatae ullam
            facere. Reiciendis, necessitatibus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const imageHand0 = new URL("../assets/img/hand-0.png", import.meta.url).href;
const imageHand1 = new URL("../assets/img/hand-1.png", import.meta.url).href;
const imageHand2 = new URL("../assets/img/hand-2.png", import.meta.url).href;

const reasons = reactive({
  hand0: {
    image: imageHand0,
    title: "Zeroth reason",
    desc: "Lorem ipsum dolor sit.",
    stepper: "0nth",
  },
  hand1: {
    image: imageHand1,
    title: "First reason",
    desc: "Lorem ipsum dolor sit.",
    stepper: "1st",
  },
  hand2: {
    image: imageHand2,
    title: "Second reason",
    desc: "Lorem ipsum dolor sit.",
    stepper: "2nd",
  },
});
</script>

<style scoped>
.card {
  height: 140px;
  width: 350px;
}
.over {
  position: relative;
  display: inline-block;
  margin-right: 8px;
}
.over::after {
  content: "";
  width: 35px;
  height: 35px;
  display: block;
  position: absolute;
  right: -5px;
  bottom: -18px;
  background: transparent;
  border-top: 5px solid #10b981;
  border-bottom: none;
  border-radius: 50%;
  transform: rotate(120deg);
  z-index: 1222;
}
.others {
  position: relative;
  display: inline-block;
  margin-left: 8px;
  z-index: 1222;
}
.others::before {
  content: "";
  width: 35px;
  height: 35px;
  display: block;
  position: absolute;
  left: -8px;
  bottom: -18px;
  background: transparent;
  border-top: 5px solid #10b981;
  border-bottom: none;
  border-radius: 50%;
  transform: rotate(245deg);
  z-index: 1;
}
</style>
