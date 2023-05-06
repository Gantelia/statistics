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
    getData: (state) => state.data
  }
})
