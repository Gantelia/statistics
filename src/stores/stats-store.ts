import { defineStore } from 'pinia'
import type { Store } from '../types/data'
import { convertData } from './utils'

const BACKEND_URL = 'https://elcodis.com/'

export const useStatsStore = defineStore('statsStore', {
  state: (): Store => ({
    hasData: false,
    data: [],
    isLoading: false
  }),
  getters: {
    getHasData: (state) => state.hasData,
    getCategoryTitles: (state) => state.data.map((category) => category.name.replace('%""', '% ')),
    getChartSeries: (state) =>
      state.data.map((category) => ({ name: category.name, data: category.data })),
    getTableData: (state) => convertData(state.data)
  },
  actions: {
    async fetchStats() {
      this.isLoading = true
      try {
        const response: any = await fetch(`${BACKEND_URL}test_task_mock.json`)
        const { has_data, data } = await response.json()
        this.hasData = has_data
        this.data = data
      } catch (error) {
        throw new Error(`error`)
      } finally {
        this.isLoading = false
      }
    }
  }
})
