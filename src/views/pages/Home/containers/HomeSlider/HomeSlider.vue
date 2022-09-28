<template lang="">
  <article class="homeSlider py-4 bg-btn-blue mt-4">
    <div class="container-custom">
      <div class="py-4">
        <div class="homeSlider__top position-relative pt-1 pb-5 px-2">
            <div :style="{backgroundImage: `url(${backgrounds.wave3})`}" class="homeSlider__top-bg h-100 w-100 position-absolute"></div>
          <div class="row justify-content-center">
            <div class="col-11 position-relative">
              <swiper
                :slides-per-view="1"
                :space-between="10"
                @swiper="onSwiper"
                navigation
                :pagination="{ clickable: true }"
                @slideChange="onSlideChange"
              >
                <swiper-slide>
                  <img
                    class="homeSlider__top-img img-fluid d-block"
                    :src="images.slide1"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    class="homeSlider__top-img img-fluid d-block"
                    :src="images.slide1"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    class="homeSlider__top-img img-fluid d-block"
                    :src="images.slide1"
                  />
                </swiper-slide>
              </swiper>

              <p class="color-blue fs-4 fw-500 text-center">
                Test and get your score immediately.
              </p>
              <div class="d-flex justify-content-center">
                <button
                  class="bg-pink-gradient homeSlider__top-btn-register fs-6 fw-500 text-white btn-custom text-center"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class = "homeSlider__bottom p-5 mt-4">
            <div class = "row g-3 row-cols-xl-3 row-cols-md-2 row-cols-1">
                <div class="col">
                    <div class = "d-flex flex-column justify-content-center align-items-center">
                        <div class = "">
                            <img :src = "images.laptop" class="img-fluid" alt = "Laptop"/>
                        </div>
                        <p class = "color-blue fw-500 mt-2 mb-0">
                            Integrate so many smart features to make your learning easier and more effective than other methods.
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class = "d-flex flex-column justify-content-center align-items-center">
                        <div class = "">
                            <img :src = "images.note" class="img-fluid" alt = "Laptop"/>
                        </div>
                        <p class = "color-blue fw-500 mt-2 mb-0">
                            Real exam questions are updated regularly. 
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class = "d-flex flex-column justify-content-center align-items-center">
                        <div class = "">
                            <img :src = "images.search" class="img-fluid" alt = "Laptop"/>
                        </div>
                        <p class = "color-blue fw-500 mt-2 mb-0">
                            Real exam questions are updated regularly. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { images, backgrounds } from "@/assets/index";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation])

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

<style scope lang="scss" src="./HomeSlider.scss"></style>
