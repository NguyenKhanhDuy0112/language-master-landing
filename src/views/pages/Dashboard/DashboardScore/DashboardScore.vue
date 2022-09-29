<template lang="">
  <div class="dashboard__score p-3 mt-4">
    <div class="row align-items-center">
      <div class="col">
        <h3 class="mb-0 fw-700">Start Practice</h3>
      </div>
    </div>
    <div class="row row-cols-xl-4 row-cols-md-2 row-cols-1 g-3 mt-3">
      <div class="col">
        <div class="card-custom">
          <YourScore
            :percent="score?.data?.speaking?.percent"
            background="FF7F2D"
            title="Speaking"
            color="FFF5F0"
            :sentenceLearned="score?.data?.speaking?.sentenceLearned"
            :totalSentence="score?.data?.speaking?.totalSentence"
          />
        </div>
      </div>
      <div class="col">
        <div class="card-custom">
          <YourScore
            :percent="score?.data?.reading?.percent"
            background="3CCF97"
            title="Reading"
            color="EAF5F6"
            :sentenceLearned="score?.data?.reading?.sentenceLearned"
            :totalSentence="score?.data?.reading?.totalSentence"
          />
        </div>
      </div>
      <div class="col">
        <div class="card-custom">
          <YourScore
            :percent="score?.data?.listening?.percent"
            background="5F97F0"
            title="Listening"
            color="EAF5F6"
            :sentenceLearned="score?.data?.listening?.sentenceLearned"
            :totalSentence="score?.data?.listening?.totalSentence"
          />
        </div>
      </div>
      <div class="col">
        <div class="card-custom">
          <YourScore
            :percent="score?.data?.writing?.percent"
            background="FB4B56"
            title="Writing"
            color="FEEBED"
            :sentenceLearned="score?.data?.writing?.sentenceLearned"
            :totalSentence="score?.data?.writing?.totalSentence"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import homeService from "@/services/homeService";
import PieChart from "@/components/PieChart/PieChart.vue";
import YourScore from "@/components/YourScore/YourScore.vue";

const score = ref<any>();
onMounted(() => {
  handleLoadScore();
});

const handleLoadScore = () => {
  homeService.getMyScore().then((res) => (score.value = res.data));
};

defineExpose({
  PieChart,
  YourScore,
});
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scope src="./DashboardScore.scss"></style>
