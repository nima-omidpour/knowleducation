<template>
  <div
    class="eye rounded-full bg-white border-solid border-emerald-400 flex justify-center items-center overflow-hidden"
    :style="{
      height: eyeHeight,
      padding: eyePadding,
      width: eyeWidth,
      borderWidth: borderWidth,
    }"
    @mousemove="handleMouseMove"
  >
    <div
      :style="eyeStyles"
      class="pupil relative rounded-full bg-slate-700 transition-all duration-100 ease-out"
    >
      <div
        v-if="isSmallEye"
        class="pupil absolute right-1/2 top-1/3 -translate-y-1/2 translate-x-full w-5 h-5 rounded-full bg-slate-500 transition-all duration-100 ease-out"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
  eyeHeight: String,
  eyeWidth: String,
  pupilWidth: String,
  pupilHeight: String,
  eyePadding: String,
  borderWidth: String,

  isSmallEye: {
    type: Boolean,
    default: true,
  },
});

const {
  eyeHeight,
  eyeWidth,
  pupilWidth,
  pupilHeight,
  eyePadding,
  borderWidth,
  isSmallEye,
} = props as {
  eyeHeight: string;
  eyeWidth: string;
  pupilHeight: string;
  pupilWidth: string;
  borderWidth: string;
  eyePadding: string;
  isSmallEye: boolean;
};
const eyeStyles = ref({ height: pupilHeight, width: pupilWidth });

const handleMouseMove = (event: MouseEvent) => {
  const eye = event.currentTarget as HTMLElement;
  const eyeRect = eye.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  const angle = Math.atan2(
    event.clientY - eyeCenterY,
    event.clientX - eyeCenterX
  );
  const maxDistance = Math.min(eyeRect.width / 4, eyeRect.height / 4);
  const pupilDistance = Math.min(
    maxDistance,
    Math.hypot(event.clientX - eyeCenterX, event.clientY - eyeCenterY)
  );

  const pupilX = pupilDistance * Math.cos(angle);
  const pupilY = pupilDistance * Math.sin(angle);

  eyeStyles.value.transform = `translate(${pupilX}px, ${pupilY}px)`;
};
</script>

<style scoped></style>
