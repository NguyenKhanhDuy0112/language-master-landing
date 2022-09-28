<template lang="">
  <div
    class="bg-blue-gradient notFound d-flex justify-content-center flex-column align-items-center"
  >
    <h1 class="text-white text-center fs-title">404 Not Found</h1>
    <button @click="handlePreviousPage" class="btn-back px-3 py-2 mt-3">
      Back to previous page
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const handlePreviousPage = () => {
  router.back();
};

defineExpose({
    handlePreviousPage
})
</script>

<script lang="ts">
export default {}
</script>

<style lang="scss" scope>
.notFound {
  min-height: 100vh;
}
.btn-back {
  background-color: $bg-btn-blue;
  color: #fff;
  border-radius: 24px;
  font-size: 1.2rem;
}
</style>
