<template lang="">
  <section class="dashboard py-4">
    <article class="container-custom">
      <div class="d-flex row g-3 justify-content-between align-items-center">
        <div class="col-lg-auto">
          <div class="position-relative mb-3">
            <div class = "d-inline-block position-relative">
              <h2 class="color-blue d-inline-block dashboard__title fw-700 mb-0">
                Welcome, {{ userName }}!
              </h2>
              <div class="position-absolute dashboard__bg-name end-0">
                <img :src="backgrounds.borderBottom" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-auto col-12">
          <button class="dashboard__btn-start fw-500 bg-btn-blue text-white px-4 py-2">
            Start test
          </button>
        </div>
      </div>
      <DashboardScore />
      <!-- <div class="mt-4">
        <div class="position-relative overflow-hidden">
          <div class="card-custom-no-border dashboard__banner p-3 bg-white">
            <div class="row">
              <div class="col-6">
                <h3 class="dashboard__banner-title mb-3 fw-700">
                  Get more practice, gain better of yourself
                </h3>
                <button
                  class="ms-4 dashboard__banner-btn px-3 py-2 text-white fw-600"
                >
                  Start doing test
                </button>
              </div>
              <div class="col-4"></div>
            </div>
          </div>
          <div class="dashboard__banner-bg">
            <div class="dashboard__banner-bg-1">
              <img :src="backgrounds.vector794" />
            </div>
            <div class="dashboard__banner-bg-2">
              <img :src="backgrounds.vector793" />
            </div>
            <div class="dashboard__banner-bg-3">
              <img :src="backgrounds.vector793" />
            </div>
          </div>
        </div>
      </div> -->

      <DashboardMistake />
    </article>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import accountService from "@/services/accountService";
import { backgrounds } from "@/assets";
import DashboardMistake from "./DashboardMistake/DashboardMistake.vue";
import DashboardScore from "./DashboardScore/DashboardScore.vue";

const userName = ref<string>("");
onMounted(() => {
  handleLoadProfile();
});

const handleLoadProfile = () => {
  accountService
    .getProfile()
    .then((res) => (userName.value = res.data.fullName));
};

defineExpose({
  backgrounds,
  DashboardMistake,
  DashboardScore,
});
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" src="./Dashboard.scss"></style>
