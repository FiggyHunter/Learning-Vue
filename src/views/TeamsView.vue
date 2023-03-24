<template>
  <HeaderContainer>
    <template #title><h1 class="w-full text-4xl font-normal">Teams</h1></template>
    <template #subtitle
      ><div class="my-4 w-full text-base text-xl font-light">
        Take a look at our teams.
      </div></template
    >
  </HeaderContainer>
</template>

<script>
import HeaderContainer from '../components/shared/HeaderContainer.vue';
export default {
  name: 'TeamsView',
  components: { HeaderContainer },
};
</script>
