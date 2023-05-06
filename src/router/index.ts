import { createRouter, createWebHistory } from 'vue-router'
import Charts from '../components/Charts.vue'
import Table from '../components/Table.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { name: 'Charts', path: '/', component: Charts },
  { name: 'Table', path: '/table', component: Table },
  { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound }
]

export const vueRouter = createRouter({
  history: createWebHistory(),
  routes
})
