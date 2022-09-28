<template lang="">
  <Header/>
  <section class = "main">
    <router-view></router-view>
  </section>
</template>

<script setup lang = "ts">
import Header from "@/layout/Header/Header.vue";

</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="scss">
  
</style>