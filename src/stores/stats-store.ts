import { defineStore } from 'pinia'
import type { Stats } from '../types/data'
import { stats } from '../mocks/stats'
import { convertData } from './utils'

export const useStatsStore = defineStore('statsStore', {
  state: (): Stats => ({
    hasData: stats.hasData,
    data: stats.data
  }),
  getters: {
    getHasData: (state) => state.hasData,
    getCategoryTitles: (state) => state.data.map((category) => category.name),
    getChartSeries: (state) =>
      state.data.map((category) => ({ name: category.name, data: category.data })),
    getTableData: (state) => convertData(state.data)
  }
})
