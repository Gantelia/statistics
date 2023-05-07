import { createRouter, createWebHistory } from 'vue-router'
import ChartPage from '../components/ChartPage.vue'
import TablePage from '../components/TablePage.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { name: 'Chart', path: '/', component: ChartPage },
  { name: 'Table', path: '/table', component: TablePage },
  { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound }
]

export const vueRouter = createRouter({
  history: createWebHistory(),
  routes
})
