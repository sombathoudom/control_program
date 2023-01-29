<template>
  <div>
    <div>{{ count }}</div>
    <v-btn @click="onClick">Click</v-btn>
    <div>{{ data }}</div>
    <v-btn @click="fetchData">Fetch Data</v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const onClick = () => {
  count.value++;
  console.log("clicked");
}

const data = ref();

async function fetchData() {
  const response = await useFetch("/api/activity");
  data.value = response.data.value;
}
</script>
