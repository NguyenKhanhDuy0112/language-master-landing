<template lang="">
  <article class="container-custom py-4">
    <div class="card-custom-no-border bg-white p-4">
      <h2 class="fw-700 color-pink">Common Mistakes</h2>
      <b-tabs content-class="" class="mt-3 dashboard__mistake-tabs">
        <b-tab title="Speaking" active>
         
        </b-tab>
        <b-tab title="Writing">
          
        </b-tab>
        <b-tab title="Reading">
         
        </b-tab>
        <b-tab title="Listening">
          
        </b-tab>
      </b-tabs>
    </div>
  </article>
</template>

<script lang="ts" setup>
import homeService from '@/services/homeService';
import { onMounted } from '@vue/runtime-core';

onMounted(() => {
 handleLoadCommonMistake()   
})

const handleLoadCommonMistake = () => {
    homeService.getAllCommonMistake().then(res => console.log(res))
}
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scope src="./CommonMistake.scss"></style>
