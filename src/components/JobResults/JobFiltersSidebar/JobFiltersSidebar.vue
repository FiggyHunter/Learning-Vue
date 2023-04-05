<template>
  <section class="w-1/4 pb-5">
    <div>
      <div class="flex flex-row justify-between">
        <h3 class="my-4 mx-5 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filters" type="secondary" />
        </div>
      </div>
      <JobFIltersSidebarJobTypes />
      <JobFiltersSidebarOrganizations />

      <JobFilterSidebarCheckboxGroup
        header="Job Types"
        :UNIQUE_VALUES="UNIQUE_JOB_TYPES"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
      />
      <JobFilterSidebarCheckboxGroup
        header="Organizations"
        :UNIQUE_VALUES="UNIQUE_ORGANIZATIONS"
        :action="userStore.ADD_SELECTED_ORGANIZATIONS"
      />
    </div>
  </section>
</template>

<script setup>
import ActionButton from '../../shared/ActionButton.vue';
import JobFilterSidebarCheckboxGroup from './JobFilterSidebarCheckboxGroup.vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user.js';
import { computed } from 'vue';

const jobsStore = useJobsStore();
const userStore = useUserStore();

const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);
</script>
