<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div
      class="m-auto flex w-11/12 cursor-pointer flex-wrap items-center justify-between"
      role="button"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>

      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="mx-auto mt-5 w-11/12">
      <slot>
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
defineProps({
  header: {
    type: String,
    required: true,
  },
});
const isOpen = ref(false);
const caretIcon = computed(() => {
  return isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down'];
});
const open = () => {
  isOpen.value = !isOpen.value;
};
</script>
