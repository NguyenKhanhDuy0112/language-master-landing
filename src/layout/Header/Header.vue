<template>
  <header class="py-2">
    <div class="container-custom">
      <div class="row align-items-center">
        <div class="col-2">
          <img :src = "images.logo" alt="Logo" />
        </div>
        <div class="col">
          <ul class="nav d-flex justify-content-center align-items-center">
            <li class="nav__item">
              <router-link
                class="nav_item-link d-block me-3"
                active-class="active"
                to="/genres"
              >
                PTE Practice
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="nav_item-link d-block mx-3"
                active-class="active"
                to="/genres"
              >
                Mock Test
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="nav_item-link d-block mx-3"
                active-class="active"
                to="/genres"
              >
                PTE Materials
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="nav_item-link d-block mx-3"
                active-class="active"
                to="/genres"
              >
                Package
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="nav_item-link d-block mx-3"
                active-class="active"
                to="/genres"
              >
                Blog
              </router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="nav_item-link d-block ms-3"
                active-class="active"
                to="/genres"
              >
                Contact us
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <button class="btn-custom me-2 bg-btn-blue text-white">Register</button>
          <button class="btn-custom bg-btn-light color-blue">Login</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { images } from "@/assets/index"

</script>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scope lang="scss" src="./Header.scss"></style>
