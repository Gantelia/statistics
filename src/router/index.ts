import { createRouter, createWebHistory } from 'vue-router'
import Charts from '../components/Charts.vue'
import Table from '../components/Table.vue'

const routes = [
  { name: 'Charts', path: '/', component: Charts },
  { name: 'Table', path: '/table', component: Table }
]

export const vueRouter = createRouter({
  history: createWebHistory(),
  routes
})
