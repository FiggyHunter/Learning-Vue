<template>
  <collapsible-accordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="value in props.UNIQUE_VALUES" :key="value" class="h-8 w-1/2">
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup lang="ts">
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { CLEAR_USER_JOB_FILTER_SELECTIONS, useUserStore } from '@/stores/user';

const userStore = useUserStore();
userStore.$onAction(({ after, name }) => {
  after(() => {
    if (name === CLEAR_USER_JOB_FILTER_SELECTIONS) {
      selectedValues.value = [];
    }
  });
});
const selectedValues = ref<string[]>([]);

const router = useRouter();

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  UNIQUE_VALUES: {
    type: [Set<string>, Array<string>],
    required: true,
  },
  action: {
    type: Function,
    required: true,
  },
});

const selectValue = () => {
  props.action(selectedValues.value);
  router.push({
    name: 'JobResults',
    query: { page: 1 },
  });
};
</script>
