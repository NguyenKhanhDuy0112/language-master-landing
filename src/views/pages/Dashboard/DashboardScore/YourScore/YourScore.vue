<template lang="">
  <div class="card-custom dashboard__score-card p-3">
    <div class="row align-items-center">
      <div class="col-auto">
        <PieChart
          :percent="percent"
          :background="background"
          :color="color"
        />
      </div>
      <div class="col-6">
        <h5 class="fw-700 mb-0">{{ title }}</h5>
      </div>
    </div>
    <div
      class="dashboard__score-completed w-100 p-3 mt-2 d-flex flex-column align-items-center"
    >
      <h6 class="fw-700 dashboard__score-question mb-0">
        {{ sentenceLearned }}/{{
          totalSentence
        }}
      </h6>
      <p class="mb-0 dashboard__score-text">Questions</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PieChart from "@/components/PieChart/PieChart.vue";

interface YourScoreProps{
    title: string,
    percent: number,
    background: string,
    color: string,
    sentenceLearned: number,
    totalSentence: number
}

const props = defineProps<YourScoreProps>()

console.log("Props: ", props)
defineExpose({
    PieChart,
    props
})
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scope></style>
