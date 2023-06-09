<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 z-50 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <router-link
          exact-active-class="home-active"
          class="flex h-full w-40 items-center text-xl"
          to="/"
          >{{ company }}</router-link
        >

        <nav class="ml-12 flex h-full w-full flex-nowrap justify-between">
          <ul class="flex h-full w-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              :class="['ml-9', 'first:ml-0', 'h-full', onLink]"
            >
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign In" @click="loginUser" class="w-1/12" type="primary" />
        </nav>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from '../../stores/user';
import { ref, computed } from 'vue';
import ActionButton from '../shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import TheSubnav from '@/components/navigation/TheSubnav.vue';

const company = ref('Leo Careers'),
  menuItems = ref([
    { text: 'Teams', url: '/teams' },
    { text: 'Locations', url: '/locations' },
    { text: 'Life at Leo Corp', url: '/life' },
    { text: 'How we hire', url: '/hiring-process' },
    { text: 'Students', url: '/students' },
    { text: 'Jobs', url: '/jobs/results' },
  ]);

const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);

const loginUser = () => userStore.loginUser();

const headerHeightClass = computed(() => {
  return {
    'h-16': !isLoggedIn.value,
    'h-32': isLoggedIn.value,
  };
});
</script>

<style scoped>
.router-link-active {
  border-bottom: solid 3px #1967d2;
}

.home-active {
  border-bottom: none;
}
</style>
