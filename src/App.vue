<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap");

/* @font-face {
  font-family: "Monotype Corsiva";
  src: local("Monotype Corsiva"), url("./fonts/MTCORSVA.woff2") format("woff2");
  font-style: normal;
  font-display: swap;
} */

.component-enter-from,
.component-leave-to {
  opacity: 0;
}

.component-enter-from {
  transform: translate3d(20px, 0, 0);
}

.component-leave-to {
  transform: translate3d(-30px, 0, 0);
}

.component-enter-active {
  transition: 450ms 1s;
}

.component-leave-active {
  transition: 150ms;
}
</style>
