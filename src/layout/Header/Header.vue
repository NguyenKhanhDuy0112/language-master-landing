<template>
  <header class="header position-fixed start-0 end-0 top-0">
    <div class="container-custom">
      <div class="row">
        <div class="col-lg-auto col">
          <router-link to = "/dashboard">
            <img :src="images.logo" alt="Logo" />
          </router-link>
        </div>
        <div class="col d-lg-block d-none">
          <Nav />
        </div>
        <div
          class="col-auto d-lg-block d-none my-auto d-flex justify-content-center align-items-center"
        >
          <button
            @click="handleLogout"
            class="header__btn-logout p-2 bg-btn-light fw-600 color-blue"
          >
            Log-out
          </button>
        </div>
        <div
          class="col-auto d-lg-none d-flex justify-content-center align-items-center"
        >
          <button @click="handleToggleDrawer" class="header__btn-toggle">
            <img :src="icons.toggleMenu" />
          </button>
        </div>
        <!-- <div
          class="col-auto d-lg-flex d-none justify-content-center align-items-center"
        >
          <b-dropdown >
            <template #button-content>
              <span class = "avatar">
                <img class= "avatar-img" src = "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg" alt = ""/>
              </span>
            </template>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
          </b-dropdown>
        </div> -->
      </div>
    </div>
  </header>
  <DrawerCustom
    @onClose="handleToggleDrawer"
    :width="70"
    position="right"
    :show="showDrawer"
  >
    <Nav />
  </DrawerCustom>
</template>

<script setup lang="ts">
import { images, icons } from "@/assets/index";
import { deleteToken } from "@/shared/helpers/localStorage";
import { ref } from "vue";
import { useRouter } from "vue-router";
import DrawerCustom from "@/components/DrawerCustom/DrawerCustom.vue";
import Nav from "@/layout/Nav/Nav.vue";

const router = useRouter();
const showDrawer = ref<boolean>(false);

const handleToggleDrawer = () => {
  showDrawer.value = !showDrawer.value;
};

const handleLogout = () => {
  deleteToken();
  router.push("/signin");
};

defineExpose({
  DrawerCustom,
  Nav,
  handleLogout,
  handleToggleDrawer,
  images,
  icons,
});
</script>

<script lang="ts">
export default {};
</script>

<style scope lang="scss" src="./Header.scss"></style>
