<template>
  <main class="relative flex h-screen flex-col">
    <section class="pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <TheHeadline @itHappened="updateImageLink" /> <JobSearchForm />
        </div>
        <div class="col-span-5 col-start-7 ml-8 grid justify-center">
          <ImageCarousel ref="imageCarousel" />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
      <section></section>
    </section>
    <SpotLight class="flex flex-row justify-center pb-16">
      <template #spotlightImages="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="mx-5 flex h-96 w-72 flex-col flex-col rounded-lg border bg-brand-gray-2"
        >
          <img :src="img" class="object-contain" />
          <div class="mt-3 h-48 px-6 py-4">
            <h3 class="text-lg font-medium">{{ title }}</h3>
            <p class="mt-3 text-sm">{{ description }}</p>
          </div>

          <router-link to="/jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1">
            See Jobs</router-link
          >
        </router-link></template
      >
    </SpotLight>
  </main>
</template>

<script>
import SpotLight from '@/components/SpotLight.vue';
import ImageCarousel from '../ImageCarousel.vue';
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';
import TheHeadline from '@/components/JobSearch/TheHeadline.vue';
export default {
  name: 'TheHero',
  components: { TheHeadline, JobSearchForm, ImageCarousel, SpotLight },
  data() {
    return {
      imageLink: '',
    };
  },
  methods: {
    updateImageLink() {
      this.$refs.imageCarousel.changeLink();
    },
  },
};
</script>
