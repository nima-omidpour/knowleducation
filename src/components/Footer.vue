<template>
  <div
    class="footer absolute group left-0 right-0 pt-10 bg-slate-100 py-20 z-[-14]"
  >
    <div
      class="curved-footer absolute left-0 right-0 bg-slate-900 rounded-tl-[70%] rounded-tr-[70%] py-20 z-30"
    >
      <div class="absolute flex items-center gap-4 right-1/2">
        <p class="text-slate-400 text-2xl font-righteous">Give me FIVE</p>

        <i
          @mousedown="handleMouseDown"
          @mouseup="handleMouseUp"
          :class="!isIconClicked ? 'group-hover:scale-125' : 'active:scale-90'"
          class="fa-regular text-emerald-500 text-3xl cursor-pointer fa-hand transition-transform duration-200"
        ></i>
      </div>
    </div>
    <div
      class="curved-footer-green absolute left-0 right-0 -z-20 bg-emerald-400 rounded-tl-[70%] rounded-tr-[70%] py-20 px-4 text-white transform -translate-y-4"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isIconClicked = ref<boolean>(false);

const handleMouseDown = (): void => {
  isIconClicked.value = true;
};

const handleMouseUp = (): void => {
  isIconClicked.value = false;
};
</script>

<style scoped></style>
