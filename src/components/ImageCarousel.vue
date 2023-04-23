<template>
  <img class="my-rounded" :src="imageLink" alt="" srcset="" />
</template>

<script setup lang="ts">
import nextElementInList from '@/utils/nextElementInList.ts';
import { ref, defineExpose } from 'vue';

const imageLink = ref(
  'https://images.unsplash.com/photo-1633887091273-a3bd71efddde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
);

const changeLink = () => {
  const links = [
    'https://images.unsplash.com/photo-1633887091273-a3bd71efddde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    'https://cdn.pixabay.com/photo/2018/11/22/23/57/london-3833039_960_720.jpg',
    'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ];
  imageLink.value = nextElementInList(links, imageLink.value);
};

defineExpose({ changeLink });
</script>

<style scoped>
.my-rounded {
  border-radius: 50%;
  width: 100%;
  height: 70%;
  aspect-ratio: 10/9;
}
</style>
