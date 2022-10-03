<template lang="">
  <ul class="nav__list">
    <li class="nav__item">
      <router-link
        active-class="active"
        to="/dashboard"
        class="nav__item-link d-flex align-items-center justify-content-lg-center h-100 mx-lg-4 mx-0"
      >
        Home
      </router-link>
    </li>
    <li class="nav__item">
      <router-link
        active-class="active"
        to="/scores"
        class="nav__item-link d-flex align-items-center justify-content-lg-center h-100 mx-lg-4 mx-0"
      >
        Scoring History​
      </router-link>
    </li>
    <li class="nav__item">
      <router-link
        active-class="active"
        to="/saved-question"
        class="nav__item-link d-flex align-items-center justify-content-lg-center h-100 mx-lg-4 mx-0"
      >
        Saved Questions​
      </router-link>
    </li>
    <li class="nav__item">
      <router-link
        active-class="active"
        to="/mistakes"
        class="nav__item-link d-flex align-items-center justify-content-lg-center h-100 mx-lg-4 mx-0"
      >
        Common Mistakes​
      </router-link>
    </li>
    <li class="nav__item d-lg-none">
      <span @click = "handleLogout" class="nav__item-link d-flex align-items-center justify-content-lg-center h-100 mx-lg-4 mx-0">
        <img :src = "icons.signout"/> <span class = "ms-2">Sign Out</span>
      </span>
    </li>
  </ul>

</template>

<script lang="ts" setup>
import { icons } from "@/assets"
import { deleteToken } from "@/shared/helpers/localStorage";
import { useRouter } from "vue-router";

const router = useRouter()

const handleLogout = () => {
  deleteToken()
  router.push('/signin')
}

defineExpose({
  icons,
  handleLogout
})

</script>

<script lang = "ts">
export default {}
</script>

<style lang="scss" scope src = "./Nav.scss"></style>
