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
    </div>
  </section>
</template>

<script>
import ActionButton from '../../shared/ActionButton.vue';
import JobFiltersSidebarOrganizations from './JobFiltersSidebarOrganizations.vue';
import JobFIltersSidebarJobTypes from './JobFIltersSidebarJobTypes.vue';

export default {
  name: 'JobFiltersSidebar',

  components: {
    ActionButton,
    JobFiltersSidebarOrganizations,
    JobFIltersSidebarJobTypes,
  },
};
</script>

<style scoped></style>
