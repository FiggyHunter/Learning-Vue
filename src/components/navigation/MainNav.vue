<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 z-50 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <router-link class="flex h-full w-40 items-center text-xl" to="/">{{
          company
        }}</router-link>

        <nav class="ml-12 flex h-full w-full flex-nowrap justify-between">
          <ul class="flex h-full w-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
          <profile-image v-if="disLoggedIn" />
          <action-button v-else text="Sign In" @click="loginUser" class="w-1/12" type="primary" />
        </nav>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../../stores/user';

import ActionButton from '../shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import TheSubnav from '@/components/navigation/TheSubnav.vue';

export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Leo Careers',
      menuItems: [
        { text: 'Teams', url: '/' },
        { text: 'Locations', url: '/' },
        { text: 'Life at Leo Corp', url: '/' },
        { text: 'How we hire', url: '/' },
        { text: 'Students', url: '/' },
        { text: 'Jobs', url: '/jobs/results' },
      ],
    };
  },
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn']), // (id: user) + Store = userStore
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn,
      };
    },
  },
  methods: {
    ...mapActions(useUserStore, ['loginUser']),
  },
};
</script>
