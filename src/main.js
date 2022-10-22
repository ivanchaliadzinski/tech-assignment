import { createApp } from 'vue'

import router from './router.js';
import store from './store/index.js';
import App from './App.vue'
import BaseButton from './components/interface/BaseButton.vue';
import BaseCard from  './components/interface/BaseCard.vue';
import BaseDialog from  './components/interface/BaseDialog.vue';
import BasePagination from "@/components/interface/BasePagination";


const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-dialog', BaseDialog);
app.component('base-pagination', BasePagination);

app.mount('#app');
