<template lang="">
  <article class="mt-4 dashboard__mistake p-lg-3 p-0">
    <div class="d-flex mb-3 justify-content-between align-items-center">
      <div>
        <img
          :style="{ height: '40px' }"
          class=""
          :src="icons.searchIcon"
          alt=""
        />
      </div>
      <h5 class="color-pink fw-700">Common Mistakes</h5>
      <button class="dashboard__mistake-btn-view fw-600 px-3 py-2">
        View all
      </button>
    </div>
    <b-tabs content-class="" class="mt-3 dashboard__mistake-tabs">
      <b-tab title="Speaking" active>
        <Mistake
          v-for="item in speaking"
          :number="item.numberQuestion"
          :title="item.title"
        />
      </b-tab>

      <b-tab title="Writing">
        <Mistake
          v-for="item in writing"
          :number="item.numberQuestion"
          :title="item.title"
        />
      </b-tab>
      <b-tab title="Reading">
        <Mistake
          v-for="item in reading"
          :number="item.numberQuestion"
          :title="item.title"
        />
      </b-tab>
      <b-tab title="Listening">
        <Mistake
          v-for="item in listening"
          :number="item.numberQuestion"
          :title="item.title"
        />
      </b-tab>
    </b-tabs>
  </article>
</template>

<script lang="ts" setup>
import { icons } from "@/assets";
import homeService from "@/services/homeService";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { Mistake as MistakeI } from "@/shared/interfaces";
import Mistake from "@/components/Mistake/Mistake.vue";

const speaking = ref<MistakeI[]>();
const writing = ref<MistakeI[]>();
const reading = ref<MistakeI[]>();
const listening = ref<MistakeI[]>();

onMounted(() => {
  handleLoadCommonMistake(1);
  handleLoadCommonMistake(2);
  handleLoadCommonMistake(3);
  handleLoadCommonMistake(4);
});

const handleLoadCommonMistake = (type: number) => {
  switch (type) {
    case 1:
      return homeService
        .getComonMistake(type)
        .then((res) => (speaking.value = res.data));
    case 2:
      return homeService
        .getComonMistake(type)
        .then((res) => (writing.value = res.data));
    case 3:
      return homeService
        .getComonMistake(type)
        .then((res) => (reading.value = res.data));
    case 4:
      return homeService
        .getComonMistake(type)
        .then((res) => (listening.value = res.data));
  }
};

defineExpose({
  icons,
  Mistake,
});
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" src="./DashboardMistake.scss"></style>
