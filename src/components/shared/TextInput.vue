<template>
  <input
    class="w-full text-lg font-normal focus:outline-none"
    type="text"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
const handleInput = ($event: Event) => {
  {
    const target = $event.target as HTMLInputElement;
    emit('update:modelValue', target.value); // <--- payload;
  }
};
</script>
