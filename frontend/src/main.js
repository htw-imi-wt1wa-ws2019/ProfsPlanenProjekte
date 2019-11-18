import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.config.productionTip = false


// Rounting
import ProjectIdeaOverview from './pages/ProjectIdeaOverview.vue';
import AddProject from './pages/AddProject.vue';
import EditProject from './pages/EditProject.vue';

const routes = [{
    path: '/',
    component: ProjectIdeaOverview
  },
  {
    path: '/add',
    component: AddProject
  },
  {
    path: '/edit/:id',
    component: EditProject
  }
];

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')