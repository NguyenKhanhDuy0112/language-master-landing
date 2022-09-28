<template lang="">
  <div
    class="overlay"
    @click="handleToggleDrawer"
    :class="[{ active: show }]"
  ></div>
  <article
    :style="{ width: `${width}%` }"
    class="drawerCustom"
    :class="[{ active: show }, position]"
  >
    <span @click = "handleToggleDrawer" class = "drawerCustom__btn-close cursor-pointer">
        <img :src = "icons.closeIcon"/>
    </span>
    <div class="mb-5 pb-4"></div>

    <slot/>
  </article>
</template>

<script lang="ts" setup>
import { icons } from "@/assets"

interface DrawerCustomProps {
  width: number;
  position: string;
  show: boolean;
}

const props = defineProps<DrawerCustomProps>();

const emit = defineEmits<{
  (e: "onClose"): void;
}>();

const handleToggleDrawer = () => {
  emit("onClose");
};

defineExpose({
    handleToggleDrawer,
    props,
    icons
})
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" src="./DrawerCustom.scss"></style>
