<template>
  <p
    class="font-opensans clamptext-08-12 text-primary italic mt-3"
    v-if="search"
  >
    Exibindo resultado da pesquisa para: <strong>{{ search }}</strong>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    search: {
      type: String,
    },
  },
});
</script>

<style lang="postcss"></style>
