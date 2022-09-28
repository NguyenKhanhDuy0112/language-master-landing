<template lang="">
  <article class="homeFeedback">
    <h1 class="fs-title color-blue fw-700 text-center mt-4">
      What’s our customers say
    </h1>
    <swiper
      :slides-per-view="1"
      :space-between="10"
      @swiper="onSwiper"
      :pagination="{ clickable: true }"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="row align-items-center">
          <div class="col">
            <p class="mb-2 fs-6">Trusted by teams</p>
            <h1 class="mb-2 fw-700">75,000 people</h1>
            <p class="mb-0">
              Many companies look for designers who code and developers who
              design. They use our courses an example to train their new hires.
            </p>
          </div>
          <div class="col">
            <div class = "homeFeedback__card">
                <div class = "homeFeedback__card-avatar d-flex align-items-center">
                    <div class = "homeFeedback__card-avatar-img">
                        <img :src= "images.avatar1" alt =""/>
                    </div>
                    <div class = "ms-3">
                        <h5 class = "homeFeedback__card-avatar-name mb-0 fw-700">Jane Cooper</h5>
                        <p class = "homeFeedback__card-avatar-des mb-0">CEO, ABC Corporation</p>
                    </div>
                </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </swiper-slide>
    </swiper>
  </article>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { images } from "@/assets";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scope src="./HomeFeedback.scss"></style>
