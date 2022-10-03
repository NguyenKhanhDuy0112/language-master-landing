<template lang="">
  <article class="container-custom py-4">
    <div class="card-custom-no-border bg-white p-4">
      <h2 class="fw-700 color-pink">Common Mistakes</h2>
      <b-tabs content-class="" class="mt-3 dashboard__mistake-tabs">
        <b-tab title="Speaking" active>
          <Mistake
            v-for="(item, index) in speakingComputed"
            :number="item.numberQuestion"
            :title="item.title"
            :key="index"
          />
          <Pagination
            :total="speaking?.length"
            :numberBullet="5"
            @onChangePage="handleChangePage"
            :current="paginationSpeaking.current"
            :totalPages="
              speaking?.length
                ? Math.ceil(speaking?.length / paginationSpeaking?.pageSize)
                : 1
            "
            :pageSize="paginationSpeaking.pageSize"
          />
        </b-tab>
        <b-tab title="Writing">
          <Mistake
            v-for="(item, index) in writing"
            :number="item.numberQuestion"
            :title="item.title"
            :key="index"
          />
        </b-tab>
        <b-tab title="Reading">
          <Mistake
            v-for="(item, index) in reading"
            :number="item.numberQuestion"
            :title="item.title"
            :key="index"
          />
        </b-tab>
        <b-tab title="Listening">
          <Mistake
            v-for="(item, index) in listeningComputed"
            :number="item.numberQuestion"
            :title="item.title"
            :key="index"
          />
          <Pagination
            :total="listening?.length"
            :numberBullet="5"
            @onChangePage="handleChangePageListening"
            :current="paginationListening.current"
            :totalPages="
              listening?.length
                ? Math.ceil(listening?.length / paginationListening?.pageSize)
                : 1
            "
            :pageSize="paginationListening.pageSize"
          />
        </b-tab>
      </b-tabs>
    </div>
  </article>
</template>

<script lang="ts" setup>
import homeService from "@/services/homeService";
import { ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { Mistake as MistakeI } from "@/shared/interfaces";
import Mistake from "@/components/Mistake/Mistake.vue";
import Pagination from "@/components/Pagination/Pagination.vue";

const paginationSpeaking = ref<{ pageSize: number; current: number }>({
  pageSize: 10,
  current: 1,
});

const paginationListening = ref<{ pageSize: number; current: number }>({
  pageSize: 10,
  current: 1,
});

const mistakes = ref<MistakeI[]>();
const speaking = ref<MistakeI[]>();
const writing = ref<MistakeI[]>();
const reading = ref<MistakeI[]>();
const listening = ref<MistakeI[]>();

onMounted(() => {
  handleLoadCommonMistake();
});

const speakingComputed = computed(() => {
  return speaking.value?.slice(
    (paginationSpeaking.value.current - 1) * paginationSpeaking.value.pageSize,
    paginationSpeaking.value.pageSize * paginationSpeaking.value.current
  );
});

const listeningComputed = computed(() => {
  return listening.value?.slice(
    (paginationListening.value.current - 1) *
      paginationListening.value.pageSize,
    paginationListening.value.pageSize * paginationListening.value.current
  );
});

watch(mistakes, () => {
  mistakes.value?.forEach((mistake: MistakeI) => {
    if (mistake.commonMistakeType === 1) {
      const newSpeaking = speaking.value ?? [];
      newSpeaking.push(mistake);
      speaking.value = newSpeaking;
    } else if (mistake.commonMistakeType === 2) {
      const newWriting = writing.value ?? [];
      newWriting.push(mistake);
      writing.value = newWriting;
    } else if (mistake.commonMistakeType === 3) {
      const newReading = reading.value ?? [];
      newReading.push(mistake);
      reading.value = newReading;
    } else {
      const newListening = listening.value ?? [];
      newListening.push(mistake);
      listening.value = newListening;
    }
  });
});

const handleLoadCommonMistake = () => {
  homeService.getAllCommonMistake().then((res) => (mistakes.value = res.data));
};

const handleChangePage = (page: number, pageSize: number) => {
  paginationSpeaking.value = { pageSize, current: page };
};

const handleChangePageListening = (page: number, pageSize: number) => {
  paginationListening.value = {pageSize, current: page}
}

defineExpose({
  Mistake,
  Pagination,
  handleChangePageListening,
  handleChangePage,
  speakingComputed,
  listeningComputed,
});
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scope src="./CommonMistake.scss"></style>
