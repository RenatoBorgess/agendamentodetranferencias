import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { store, key } from './store';

createApp(App)
  .use(router)
  .use(store, key)
  .mount('#app')
