import { defineStore } from 'pinia'
import type { Store } from '../types/data'
import { stats } from '../mocks/stats'

export const useStatsStore = defineStore('statsStore', {
  state: (): Store => ({
    hasData: true,
    data: stats
  }),
  getters: {
    getHasData: (state) => state.hasData,
    getCategoryTitles: (state) => state.data.map((category) => category.name).join(', '),
    getSeries: (state) =>
      state.data.map((category) => ({ name: category.name, data: category.data }))
  }
})
