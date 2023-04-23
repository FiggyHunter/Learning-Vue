<template>
  <section class="w-1/4 pb-5">
    <div>
      <div class="flex flex-row justify-between">
        <h3 class="my-4 mx-5 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton
            text="Clear Filters"
            type="secondary"
            @click="userStore.CLEAR_USER_JOB_FILTER_SELECTIONS"
          />
        </div>
      </div>
      <JobFIltersSidebarJobTypes />
      <JobFiltersSidebarOrganizations />

      <JobFilterSidebarSkills />
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
      <JobFilterSidebarCheckboxGroup
        header="Degrees"
        :UNIQUE_VALUES="UNIQUE_DEGREES"
        :action="userStore.ADD_SELECTED_DEGREES"
      ></JobFilterSidebarCheckboxGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDegreesStore } from '@/stores/degrees';
import ActionButton from '../../shared/ActionButton.vue';
import JobFilterSidebarCheckboxGroup from './JobFilterSidebarCheckboxGroup.vue';
import JobFilterSidebarSkills from './JobFilterSidebarSkills.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user.ts';
import { computed } from 'vue';

const jobsStore = useJobsStore();
const userStore = useUserStore();
const degreesStore = useDegreesStore();

const route = useRoute();

const parseSkillsSearchTerm = () => {
  const role = (route.query.role as string) || '';
  userStore.UPDATE_SKILLS_SEARCH_TERM(role);
};

onMounted(parseSkillsSearchTerm);

const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES);
</script>
