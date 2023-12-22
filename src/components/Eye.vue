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
    <div :style="eyeStyles" class="pupil"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";

const props = defineProps([
  "eyeHeight",
  "eyeWidth",
  "eyePadding",
  "borderWidth",
  "pupilHeight",
  "pupilWidth",
]);

const {
  eyeHeight,
  eyeWidth,
  pupilWidth,
  pupilHeight,
  eyePadding,
  borderWidth,
} = props as {
  eyeHeight: string;
  eyeWidth: string;
  pupilHeight: string;
  pupilWidth: string;
  borderWidth: string;
  eyePadding: string;
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

<style scoped>
.eye {
  position: absolute;
  border-width: 30px;
}

.pupil {
  background-color: #333;
  border-radius: 50%;
  transition: all 0.1s ease-out;
}
</style>
