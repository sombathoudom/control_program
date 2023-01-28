<template>
  <div>
    <div>{{ count }}</div>
    <v-btn @click="onClick">Click</v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function onClick() {
  count.value++;
  console.log("clicked");
}
</script>
