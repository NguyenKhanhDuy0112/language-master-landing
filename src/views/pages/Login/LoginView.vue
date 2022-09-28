<template>
  <div
    class="d-flex login__container justify-content-center align-items-center w-100"
  >
    <article class="login p-4">
      <div class="position-relative login__header">
        <div class="login__logo position-absolute start-0">
          <img :src="images.logo" alt="Logo" />
        </div>
        <h2 class="color-pink mb-0 text-center fw-700">Login</h2>
      </div>
      <form>
        <div class="login__field mb-3">
          <label for="email" class="login__field-label fw-500 mb-1 require">
            Your Email
          </label>
          <input
            v-model="formLogin.email"
            id="email"
            placeholder="Enter your email"
            class="login__field-input form-control py-2 px-3"
          />
        </div>
        <div class="login__field mb-3">
          <label for="password" class="login__field-label fw-500 mb-1 require">
            Your Password
          </label>
          <input
            v-model="formLogin.password"
            id="password"
            type="password"
            placeholder="Enter your password"
            class="login__field-input form-control py-2 px-3"
          />
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <input id="remember" name="remember" type="checkbox" />
            <label class="ms-2" for="remember">Remember me</label>
          </div>
          <span class="color-pink cursor-pointer">Forgot password?</span>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <button
            type="submit"
            @click.prevent="handleLogin"
            class="login__btn p-2"
          >
            Login
          </button>
        </div>
      </form>
      <p class="text-center color-pink mt-4 mb-4 fw-500">Or login with</p>
      <div class="d-flex justify-content-center">
        <button
          class="login__btn login__btn-google d-flex justify-content-center align-items-center p-2"
        >
          <span class="login__btn-google-icon">
            <img :src="icons.googlePlus" alt="" />
          </span>
          <span class="login__btn-google-text ms-2">Login with Google</span>
        </button>
      </div>
      <div class="d-flex justify-content-center align-items-center mt-4">
        <p class="mb-0">
          Do not have an account?
          <span class="cursor-pointer color-pink fw-500">Register</span>
        </p>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { images, icons } from "@/assets";
import authService from "@/services/authService";
import { saveToken } from "@/shared/helpers/localStorage";

const router = useRouter();
const formLogin = ref<{ email: string; password: string }>({
  email: "",
  password: "",
});

const handleLogin = () => {
  authService
    .loginLeaner({
      userName: formLogin.value.email,
      password: formLogin.value.password,
    })
    .then((res) => {
      saveToken(res.data.token);
      router.push("/dashboard");
    });
};

defineExpose({
  handleLogin,
  images,
  icons
})
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scope src="./Login.scss"></style>
