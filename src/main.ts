import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import router from '@/router';

import App from '@/App.vue';
import '@/index.css';

const pinia = createPinia(); // our store, needed to register with the app

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

createApp(App).use(pinia).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app'); // mounter
