<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        name="spotlightImages"
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
      <!--Here we give to the parent name spotlight, and the value of that is the current spotlight in the v-for, which is also v-binded as it's an object-like thing.-->
    </li>
  </ul>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

export interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string[];
}

let spotlights = ref<Spotlight[]>([]);
let mounted = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/spotlights`;
  const response = await axios.get(url);
  spotlights.value = response.data;
};
onMounted(mounted);
</script>
