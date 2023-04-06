<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import JobListing from './JobListing.vue';
import { useJobsStore } from '../../stores/jobs';
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { getNextPage, getPreviousPage } from '@/composables/usePreviousAndNextPages.js';

const jobsStore = useJobsStore();
const FILTERED_JOBS = computed(() => {
  return jobsStore.FILTERED_JOBS;
});
onMounted(jobsStore.FETCH_JOBS);
const route = useRoute();

const currentPage = computed(() => {
  return Number.parseInt(route.query.page || '1');
});

const previousPage = computed(() => {
  return getPreviousPage(currentPage.value);
});

const nextPage = computed(() => {
  return getNextPage(currentPage.value, Math.ceil(FILTERED_JOBS.value.length / 10));
});

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex);
});
</script>
