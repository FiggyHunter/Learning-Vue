import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Job } from '@/api/types';
import type { Degree } from '@/api/types';

export const ADD_SELECTED_ORGANIZATIONS = 'ADD_SELECTED_ORGANIZATIONS';
export const ADD_SELECTED_JOB_TYPES = 'ADD_SELECTED_JOB_TYPES';
export const ADD_SELECTED_DEGREES = 'ADD_SELECTED_DEGREES';
export const CLEAR_USER_JOB_FILTER_SELECTIONS = 'CLEAR_USER_JOB_FILTER_SELECTIONS';

export interface UserState {
  isLoggedIn: boolean;
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
}

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false);
  const selectedOrganizations = ref<string[]>([]);
  const selectedJobTypes = ref<string[]>([]);
  const selectedDegrees = ref<string[]>([]);
  const skillsSearchTerm = ref<string>('');

  const loginUser = () => {
    isLoggedIn.value = true;
  };
  const ADD_SELECTED_ORGANIZATIONS = (organizations: string[]) => {
    selectedOrganizations.value = organizations;
  };

  const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
    selectedJobTypes.value = jobTypes;
  };
  const ADD_SELECTED_DEGREES = (degrees: string[]) => {
    selectedDegrees.value = degrees;
  };
  const CLEAR_USER_JOB_FILTER_SELECTIONS = () => {
    selectedDegrees.value = [];
    selectedJobTypes.value = [];
    selectedOrganizations.value = [];
    skillsSearchTerm.value = '';
  };

  const UPDATE_SKILLS_SEARCH_TERM = (term: string) => {
    skillsSearchTerm.value = term;
  };

  return {
    isLoggedIn,
    selectedOrganizations,
    selectedJobTypes,
    selectedDegrees,
    skillsSearchTerm,
    loginUser,
    ADD_SELECTED_ORGANIZATIONS,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_DEGREES,
    CLEAR_USER_JOB_FILTER_SELECTIONS,
    UPDATE_SKILLS_SEARCH_TERM,
  };
});
