<template>
  <article class="home">
    <div class="home__banner pt-4 position-relative">
      <div
        :style="{ backgroundImage: `url(${backgrounds.bgHome})` }"
        class="home__bg position-absolute h-100 w-100"
      ></div>
      <div class="container-custom">
        <div class="row justify-content-center">
          <div class="col-8">
            <h1 class="color-blue font-saira text-center mb-1 fw-700">
              An advanced platform for better
            </h1>
            <h1 class="color-pink font-saira text-center mb-2 fw-700">
              PTE learning experiences
            </h1>
            <p class="text-center mb-2">
              Many smart features to make your learning easier and more
              effective than other methods.
            </p>
            <div class="row justify-content-center">
              <div class="col-8">
                <div class="home__video-card p-3">
                  <div
                    class="home__video-card-head d-flex mb-3 align-items-center"
                  >
                    <span
                      class="home__video-card-head-btn red rounded-circle d-block me-1"
                    ></span>
                    <span
                      class="home__video-card-head-btn yellow rounded-circle d-block mx-1"
                    ></span>
                    <span
                      class="home__video-card-head-btn green rounded-circle d-block ms-1"
                    ></span>
                  </div>
                  <div>
                    <img
                      :src="images.video"
                      class="img-fluid d-block w-100"
                      alt="Video"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeSlider />
    <HomeMember />
  </article>
</template>

<script lang="ts" setup>
import { images, backgrounds } from "@/assets";
import HomeMember from "@/views/pages/Home/containers/HomeMember/HomeMember.vue";
import HomeSlider from "@/views/pages/Home/containers/HomeSlider/HomeSlider.vue";

import { ref } from "vue";
</script>

<style src="./Home.scss" lang="scss" scoped></style>
