<template>
  <div class="mt-2 w-full text-center">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="h-12 w-11/12 rounded border border-solid border-brand-gray-1 p-3 text-base shadow-none outline-none focus:shadow-blue"
      type="text"
      placeholder="Computer Programming"
    />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

// const skillsSearchTerm = ref("");

const userStore = useUserStore();

const skillsSearchTerm = computed({
  get() {
    return userStore.skillsSearchTerm;
  },
  set(value: string) {
    userStore.UPDATE_SKILLS_SEARCH_TERM(value);
  },
});
</script>
