<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" class="text max-w-l flex h-full w-1/12 items-center">{{ company }}</a>

        <nav class="ml-12 flex h-full w-full flex-nowrap justify-between">
          <ul class="flex h-full w-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 h-full first:ml-0">
              <a href="" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign In" @click="logInUser" class="w-1/12" type="primary" />
        </nav>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from './ActionButton.vue';
import ProfileImage from './ProfileImage.vue';
import TheSubnav from './TheSubnav.vue';

export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Leo Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at Leo Corp', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false,
    };
  },
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  methods: {
    logInUser() {
      this.isLoggedIn = true;
    },
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn,
      };
    },
  },
};
</script>
