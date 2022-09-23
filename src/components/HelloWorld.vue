<template>
  <div class="hello">
    <h1 class="header text-red">{{ msg }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const msg = ref<string>("Hello");
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup() {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="scss">
@import "@/views/styles/index.scss";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.header {

}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
