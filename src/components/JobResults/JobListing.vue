<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white transition-shadow duration-500 hover:shadow-gray"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div class="">
            <span>{{ job.locations.toString() }}</span>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div class="">
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div class="">
            <ul class="list-disc pl-8">
              <li v-for="qualification in job.minimumQualifications" :key="qualification">
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="jobPageLink" class="text-brand-blue-1">Expand</router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { defineProps, computed, type PropType, type Prop } from 'vue';
import type { Job } from '@/api/types';

const props = defineProps({
  job: {
    type: Object as PropType<Job>,
    required: true,
  },
});

const jobPageLink = computed(() => {
  return `/jobs/results/${props.job.id}`;
});
</script>
