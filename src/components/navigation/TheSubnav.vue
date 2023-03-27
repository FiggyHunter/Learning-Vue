<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
    <div v-if="onJobs" class="flex h-full items-center px-8">
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span
        ><span class="text-brand-green-1">{{ FILTERED_JOBS_BY_ORGANIZATIONS.length }}</span> jobs
        matched</span
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useJobsStore, FILTERED_JOBS_BY_ORGANIZATIONS } from '../../stores/jobs';

export default {
  name: 'TheSubnav',
  data() {
    return {
      onJobs: true,
    };
  },
  computed: {
    ...mapState(useJobsStore, [FILTERED_JOBS_BY_ORGANIZATIONS]),
  },
};
</script>
