<template lang="">
  <section class="container-custom scoreHistory py-4">
    <div class="card-custom-no-border bg-white p-4">
      <div class="row">
        <div class="col">
          <h3 class="color-blue fw-700">Scoring History</h3>
        </div>
        <div class="col-auto">
          <button class="scoreHistory__percent px-3 py-2">
            <span>{{ scoreHistory?.totalyourquestion }} questions answered</span
            ><span class="ms-2">{{ scoreHistory?.percent }}% complete</span>
          </button>
        </div>
      </div>
      <div class="row mt-1 row-cols-1 g-3">
        <div v-for="item in scoreHistory?.datas?.values" class="col">
          <div class="card-custom p-2">
            <div class="row g-3 row-cols-lg-2 row-cols-1">
              <div class="col scoreHistory__first-col">
                <YourScore
                  :percent="item.scoring.percent"
                  :background="handleChangeBackground(item.scoring.title)"
                  :title="item.scoring.title"
                  :color="handleChangeColor(item.scoring.title)"
                  fsTitle="1.7"
                  headerReverse
                  :sentenceLearned="item.scoring.sentenceLearned"
                  :totalSentence="item.scoring.totalSentence"
                />
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div class="p-3">
                  <h5 class="color-title-gray fw-600 mb-3">Last attemps</h5>
                  <Mistake
                    mistake
                    v-for="attem in item?.lastAttems"
                    :number="attem.orther"
                    :title="`${item.scoring.title} - Question ${attem.orther}`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import homeService from "@/services/homeService";
import { onMounted, ref } from "@vue/runtime-core";
import YourScore from "@/components/YourScore/YourScore.vue";
import Mistake from "@/components/Mistake/Mistake.vue";

const scoreHistory = ref();

onMounted(() => {
  handleLoadScoringHistory();
});

const handleChangeBackground = (type: string) => {
  switch (type) {
    case "Reading":
      return "3CCF97";
    case "Speaking":
      return "FF7F2D";
    case "Writing":
      return "FB4B56";
    case "Listening":
      return "5F97F0";
  }
};

const handleChangeColor = (type: string) => {
  switch (type) {
    case "Reading":
      return "EAF5F6";
    case "Speaking":
      return "FFF5F0";
    case "Writing":
      return "FEEBED";
    case "Listening":
      return "EAF5F6";
  }
};

const handleLoadScoringHistory = () => {
  homeService.getScoreHistory().then((res) => (scoreHistory.value = res.data));
};

defineExpose({
  YourScore,
});
</script>

<script lang="ts">
export default {};
</script>
<style lang="scss" scope src="./ScoreHistory.scss"></style>
