<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div
      class="m-auto flex w-11/12 cursor-pointer flex-wrap items-center justify-between"
      role="button"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>

      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="mx-auto mt-5 w-11/12">
      <slot>
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapsableAccordion',

  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down'];
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
  props: {
    header: {
      type: String,
      required: true,
    },
  },
};
</script>
