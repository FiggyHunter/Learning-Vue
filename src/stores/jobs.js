import { defineStore } from 'pinia';
import getJobs from '../api/getJobs';

export const FETCH_JOBS = 'FETCH_JOBS'; //prevents typos, and also enables namespace to be used in the importing component.
export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async FETCH_JOBS() {
      this.jobs = await getJobs();
    },
  },
});
