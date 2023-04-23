import { createPinia, defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Degree } from '@/api/types';
import getDegrees from '@/api/getDegrees';

export const useDegreesStore = defineStore('degrees', () => {
  const degrees = ref<Degree[]>([]); // state(data)

  const FETCH_DEGREES = async () => {
    const receivedDegrees = await getDegrees();
    degrees.value = receivedDegrees;
  };

  const UNIQUE_DEGREES = computed(() => degrees.value.map((degree) => degree.degree)); // computed ensures that this function runs every single time when degrees changes.

  return { degrees, FETCH_DEGREES, UNIQUE_DEGREES }; // Everything you want exposed, return here.
});
