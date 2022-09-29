<template lang="">
  <div class="mistake-question d-flex justify-content-between align-items-center mb-2">
    <div class = "d-flex align-items-center">
      <span class="mistake-question-number" :class="[{ active: mistake }]"> #{{ number }} </span>
      <span class="mistake-question-text ms-2">
        {{ title }}
      </span>
    </div>
    <button class = "mistake-btn d-flex px-3 py-1 justify-content-center align-items-center">
        <span class = "mistake-btn-text">Visit</span>
        <div class = "mistake-btn-img ms-2">
            <img  class = "w-100" :src = "icons.arrowRight"  alt = ""/>
        </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { icons } from "@/assets";

interface MistakeProps {
  title: string;
  number: number;
  mistake?: boolean
}
const props = defineProps<MistakeProps>();

defineExpose({
  props,
  icons
});
</script>

<script lang="ts">
export default {};
</script>
<style lang="scss" scope src="./Mistake.scss"></style>
