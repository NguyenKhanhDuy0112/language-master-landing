<template lang="">
    <article class = "bg-btn-blue homeSignup py-4">
        <div class = "container-custom">
            <div class = "bg-white homeSignup__container py-5">
                <h1 class = "fs-title color-blue fw-700 text-center">PTE Mock Test</h1>
                <p class = "text-center color-blue mb-5">
                    Want to quickly assess your PTE score?​<br/>
                    Register a FREE MOCK TEST with PTE Mates now!​
                </p>

                <div class = "row align-items-center mb-5 pb-5">
                    <div class = "col-5">
                        <ul class = "homeSignup__list">
                            <li class = "homeSignup__list-item d-flex align-items-center mb-3">
                                <span class = "homeSignup__list-item-icon">
                                    <img :src = "icons.fiCheckCircle" alt = ""/>
                                </span>
                                <span class = "homeSignup__list-item-text color-blue fw-500 fs-4 ms-2">
                                    Real exam questions
                                </span>
                            </li>
                            <li class = "homeSignup__list-item d-flex align-items-center mb-3">
                                <span class = "homeSignup__list-item-icon">
                                    <img :src = "icons.fiCheckCircle" alt = ""/>
                                </span>
                                <span class = "homeSignup__list-item-text color-blue fw-500 fs-4 ms-2">
                                    Real exam formats
                                </span>
                            </li>
                            <li class = "homeSignup__list-item d-flex align-items-center mb-3">
                                <span class = "homeSignup__list-item-icon">
                                    <img :src = "icons.fiCheckCircle" alt = ""/>
                                </span>
                                <span class = "homeSignup__list-item-text color-blue fw-500 fs-4 ms-2">
                                    Real experience
                                </span>
                            </li>
                            <li class = "homeSignup__list-item d-flex align-items-center mb-4">
                                <span class = "homeSignup__list-item-icon">
                                    <img :src = "icons.fiCheckCircle" alt = ""/>
                                </span>
                                <span class = "homeSignup__list-item-text color-blue fw-500 fs-4 ms-2">
                                    Get immediate scoring
                                </span>
                            </li>
                            
                        </ul>
                        <h1 class = "color-blue fw-700 mt-5">SUPER EASY!​</h1>
                    </div>
                    <div class = "col">
                        <div class = "homeSignup__form p-3">
                            <div class = "homeSignup__form-head">
                                <img class = "homeSignup__form-head-img w-100" :src = "images.platform" alt = ""/>
                            </div>
                            <div class = "homeSignup__form-body mt-3">
                                <div class = "row row-cols-md-2 g-3 row-cols-1">
                                    <div class = "col">
                                        <input placeholder = "Name" class = "homeSignup__form-input form-control p-2" />
                                    </div>
                                    <div class = "col">
                                        <input placeholder = "Phone" class = "homeSignup__form-input form-control p-2" />
                                    </div>
                                    <div class = "col">
                                        <input placeholder = "Email" class = "homeSignup__form-input form-control p-2" />
                                    </div>
                                    <div class = "col">
                                        <div class = "position-relative">
                                            <input placeholder = "Your course you interested" class = "homeSignup__form-input form-control p-2" />
                                            <span class = "homeSignup__form-input-add"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class = "bg-pink-gradient p-2 w-100 fw-600 text-white mt-3 homeSignup__form-btn">
                                Sign-up for FREE MOCK TEST ​
                            </button>
                        </div>
                    </div>
                </div>
                <HomeFeedback/>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { icons, images } from "@/assets"
import HomeFeedback from "./HomeFeedback/HomeFeedback.vue"


</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {},
})
</script>

<style lang="scss" scope src = "./HomeSignup.scss">
</style>