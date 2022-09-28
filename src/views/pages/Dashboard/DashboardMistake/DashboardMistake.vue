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
    <b-tabs content-class="" class = "mt-3 dashboard__mistake-tabs">
      <b-tab title="Speaking" active>
        <div class = "dashboard__mistake-question mb-2">
          <span class = "dashboard__mistake-question-number">
            1
          </span>
          <span class = "dashboard__mistake-question-text ms-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor …. 
          </span>
        </div>
        <div class = "dashboard__mistake-question">
          <span class = "dashboard__mistake-question-number">
            2
          </span>
          <span class = "dashboard__mistake-question-text ms-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor …. 
          </span>
        </div>
      </b-tab>
      <b-tab title="Writing">
        <p>Reading tab</p>
      </b-tab>
      <b-tab title="Reading">
        <p>Speaking tab!</p>
      </b-tab>
      <b-tab title="Listening">
        <p>Speaking tab!</p>
      </b-tab>
    </b-tabs>
  </article>
</template>

<script lang="ts" setup>
import { icons } from "@/assets";

defineExpose({
  icons
})
</script>

<script lang="ts">
export default {}
</script>

<style lang="scss" src="./DashboardMistake.scss"></style>
