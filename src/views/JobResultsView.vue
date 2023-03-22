<template>
  <h1 class="text-6xl font-bold">Jobs page</h1>
  <button @click="goToHome">Go To Home Page</button>
</template>

<script>
export default {
  name: 'JobResults',
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
