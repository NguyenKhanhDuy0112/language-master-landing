<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <template #default>
              <component :is="Component"></component>
            </template>
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

<script lang="ts" setup>
import Loading from "@/components/Loading/Loading.vue";

defineExpose({
  Loading,
})

</script>

<style lang="scss"></style>
