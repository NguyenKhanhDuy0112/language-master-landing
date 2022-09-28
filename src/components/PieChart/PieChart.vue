<template lang="">
  <div
    class="progress-circle"
    :style="{
      background: `conic-gradient(#${background} ${
        3.6 * percent
      }deg, #${color} 0deg)`,
    }"
  >
    <span class="progress-value" :style="{
      color: `#${background}`,
    }">{{ percent }}%</span>
  </div>
</template>

<script lang="ts" setup>
interface PieChartProps {
  percent: number;
  background: string;
  color: string;
}
const props = defineProps<PieChartProps>();

console.log(props)

defineExpose({
  props,
});
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scope src="./PieChart.scss"></style>
