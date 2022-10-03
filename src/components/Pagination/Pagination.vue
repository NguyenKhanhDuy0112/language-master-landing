<template lang="">
  <article class="">
    <ul
      class="pagination__list d-flex justify-content-center align-items-center"
    >
      <li
        class="pagination__item icon mx-1"
        :class="[{ disabled: current === 1 }]"
        @click="handleChangePage(current - 1, pageSize)"
      >
        <img :src="icons.angleLeft" alt="" />
      </li>
      <span v-if="current > numberBullet" class="mx-1">...</span>
      <template v-for="(item, index) in totalPages">
        <li
          class="pagination__item mx-1"
          v-if="index < numberBullet"
          @click="handleChangePage(index + 1, pageSize)"
          :class="[{ active: index + 1 === current }]"
        >
          {{ index + 1 }}
        </li>
      </template>
      <span v-if="totalPages > numberBullet" className="mx-1">...</span>
      <li
        :class="[{ active: current === totalPages }]"
        @click="handleChangePage(totalPages, pageSize)"
        v-if="totalPages > numberBullet"
        class="pagination__item mx-1"
      >
        {{ totalPages }}
      </li>
      <li
        class="pagination__item icon mx-1"
        @click="handleChangePage(current + 1, pageSize)"
        :class="[{ disabled: current === totalPages }]"
      >
        <img :src="icons.angleRight" alt="" />
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { icons } from "@/assets";
interface PaginationProps {
  total?: number;
  current: number;
  numberBullet: number;
  totalPages?: number;
  pageSize: number;
}

const props = defineProps<PaginationProps>();

const emit = defineEmits<{
  (e: "onChangePage", page: number, pageSize: number): void;
}>();

const handleChangePage = (page: number, pageSize: number) => {
  emit("onChangePage", page, pageSize);
};

defineExpose({
  icons,
  props,
  handleChangePage,
});
</script>

<script lang="ts">
export default {};
</script>
<style lang="scss" scope src="./Pagination.scss"></style>
