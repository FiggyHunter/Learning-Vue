<template>
  <collapsible-accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="jobType in UNIQUE_JOB_TYPES" :key="jobType" class="h-8 w-1/2">
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user.ts';

import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
let selectedJobTypes = ref([]);

const router = useRouter();

const jobStore = useJobsStore();
const UNIQUE_JOB_TYPES = computed(() => jobStore.UNIQUE_JOB_TYPES);

const userStore = useUserStore();
const selectType = () => {
  userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value);
  router.push({
    name: 'JobResults',
    query: { page: 1 },
  });
};
</script>
