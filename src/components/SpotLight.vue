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

<script>
import axios from 'axios';
export default {
  name: 'SpotLight',
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/spotlights`;
    const response = await axios.get(url);
    this.spotlights = response.data;
  },
};
</script>
