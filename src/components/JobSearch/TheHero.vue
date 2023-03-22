<template>
  <main class="relative">
    <section class="flex h-screen flex-col pt-10 pb-20">
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
  </main>
</template>

<script>
import ImageCarousel from '../ImageCarousel.vue';
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';
import TheHeadline from '@/components/JobSearch/TheHeadline.vue';
export default {
  name: 'TheHero',
  components: { TheHeadline, JobSearchForm, ImageCarousel },
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
