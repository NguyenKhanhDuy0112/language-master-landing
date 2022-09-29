<template lang="">
    <div class="dashboard__score-card p-3">
      <div class="row align-items-center" :class="[{ 'flex-row-reverse': headerReverse }]">
        <div class="col-auto">
          <PieChart
            :percent="percent"
            :background="background"
            :color="color"
          />
        </div>
        <div class="col">
          <h5 :style = "{ color: `#${background}`, fontSize: `${fsTitle}rem` }" class="fw-600 mb-0">{{ title }}</h5>
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
      headerReverse?: boolean,
      fsTitle?: number,
      color: string,
      sentenceLearned: number,
      totalSentence: number
  }
  
  const props = defineProps<YourScoreProps>()
  
  defineExpose({
      PieChart,
      props
  })
  </script>
  
  <script lang="ts">
  export default {};
  </script>
  
  <style lang="scss" scope></style>
  