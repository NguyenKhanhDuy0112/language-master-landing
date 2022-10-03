<template lang="">
  <div class="mistake-question row align-items-center mb-2">
    <div class="col-auto">
      <span class="mistake-question-number" :class="[{ active: mistake }]">
        #{{ number }}
      </span>
    </div>
    <div class="col">
      <span class="mistake-question-text">
        {{ title }}
      </span>
    </div>
    <div class="col-auto">
      <button
        class="mistake-btn d-flex px-3 py-1 justify-content-center align-items-center"
      >
        <span class="mistake-btn-text">Visit</span>
        <div class="mistake-btn-img ms-2">
          <img class="w-100" :src="icons.arrowRight" alt="" />
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { icons } from "@/assets";

interface MistakeProps {
  title: string;
  number: number;
  mistake?: boolean;
}
const props = defineProps<MistakeProps>();

defineExpose({
  props,
  icons,
});
</script>

<script lang="ts">
export default {};
</script>
<style lang="scss" scope src="./Mistake.scss"></style>
