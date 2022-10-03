<template lang="">
  <Header />
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <section class="main">
              <component :is="Component"></component>
            </section>

            <!-- loading state -->
            <template #fallback> 
              <Loading/>
            </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>
</template>

<script setup lang="ts">
import Header from "@/layout/Header/Header.vue";
import Loading from "@/components/Loading/Loading.vue";

defineExpose({
  Header,
  Loading
})
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss"></style>
