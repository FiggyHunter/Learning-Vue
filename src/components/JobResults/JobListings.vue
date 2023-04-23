<template>
  <main class="min-h-screen flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div v-if="!anyJobs" class="">Currently no available jobs.</div>
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
            v-if="nextPage && anyJobs"
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

<script setup lang="ts">
import JobListing from './JobListing.vue';
import { useJobsStore } from '../../stores/jobs';
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, watch } from 'vue';
import { getNextPage, getPreviousPage } from '@/composables/usePreviousAndNextPages.ts';
import { useDegreesStore } from '@/stores/degrees';

const degreesStore = useDegreesStore();
const jobsStore = useJobsStore();
const FILTERED_JOBS = computed(() => {
  return jobsStore.FILTERED_JOBS;
});
onMounted(jobsStore.FETCH_JOBS);
onMounted(degreesStore.FETCH_DEGREES);
const route = useRoute();
const router = useRouter();

const anyJobs = computed(() => {
  return FILTERED_JOBS.value.length ? true : false;
});

const currentPage = computed(() => {
  return Number.parseInt((route.query.page as string) || '1');
});

const previousPage = computed(() => {
  if (displayedJobs.value.length > 0) return getPreviousPage(currentPage.value);
  else return 0;
});

const nextPage = computed(() => {
  if (displayedJobs.value.length === 0) return 0;

  return getNextPage(currentPage.value, Math.ceil(FILTERED_JOBS.value.length / 10));
});

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex);
});

watch(FILTERED_JOBS, () => {
  router.push({ query: { page: 1 } });
});
</script>
