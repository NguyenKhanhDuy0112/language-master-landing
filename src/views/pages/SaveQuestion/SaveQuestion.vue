<template lang="">
  <section class="question container-custom py-4">
    <div class="card-custom-no-border bg-white p-4">
      <h2 class="color-blue fw-700">Saved Questions</h2>
      <b-tabs content-class="" class="mt-3 savedQuestion__tabs">
        <b-tab title="Speaking" active>
          <Mistake
            mistake
            v-for="item in speaking?.data"
            :title="item.title"
            :number="item.orther"
          />
        </b-tab>
        <b-tab title="Writing">
          <Mistake
            mistake
            v-for="item in writing?.data"
            :title="item.title"
            :number="item.orther"
          />
        </b-tab>
        <b-tab title="Reading">
          <Mistake
            mistake
            v-for="item in reading?.data"
            :title="item.title"
            :number="item.orther"
          />
        </b-tab>
        <b-tab title="Listening">
          <Mistake
            mistake
            v-for="item in listening?.data"
            :title="item.title"
            :number="item.orther"
          />
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script lang="ts" setup>
import homeService from "@/services/homeService";
import { onMounted, ref } from "@vue/runtime-core";
import { SavedQuestion } from "@/shared/interfaces";
import Mistake from "@/components/Mistake/Mistake.vue";

interface SavedQuestionI extends SavedQuestion {
  limit: number;
  page: number;
  percent: number;
  total: number;
  totalquestion: number;
  totalyourquestion: number;
}

const speaking = ref<SavedQuestionI>();
const writing = ref<SavedQuestionI>();
const reading = ref<SavedQuestionI>();
const listening = ref<SavedQuestionI>();

onMounted(() => {
  handleLoadBookmark();
});

console.log("Speaking: ", speaking)

const handleLoadBookmark = () => {
  homeService.getBookmarkQuestion(1).then((res) => speaking.value = res.data);
  homeService.getBookmarkQuestion(2).then((res) => writing.value = res.data);
  homeService.getBookmarkQuestion(3).then((res) => reading.value = res.data);
  homeService
    .getBookmarkQuestion(4)
    .then((res) => listening.value = res.data);
};

console.log("Speaking: ", speaking.value)
defineExpose({
  Mistake,
});
</script>

<script lang="ts">
export default {};
</script>
<style lang="scss" scope src="./SaveQuestion.scss"></style>
