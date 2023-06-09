import { defineStore } from 'pinia'
import type { Store } from '../types/data'
import checkStatus, { convertData } from './utils'
import { ERROR_TIMEOUT } from '@/const'

export const useStatsStore = defineStore('statsStore', {
  state: (): Store => ({
    hasData: false,
    data: [],
    isLoading: false,
    isError: false
  }),
  getters: {
    getHasData: (state) => state.hasData,
    getCategoryTitles: (state) => state.data.map((category) => category.name),
    getChartSeries: (state) =>
      state.data.map((category) => ({ name: category.name, data: category.data })),
    getTableData: (state) => convertData(state.data)
  },
  actions: {
    async fetchStats() {
      this.isLoading = true
      try {
        const response: any = await fetch('https://elcodis.com/test_task_mock.json')
        checkStatus(response)
        const { has_data, data } = await response.json()
        this.hasData = has_data
        this.data = data
      } catch (error) {
        this.isError = true
        setTimeout(() => (this.isError = false), ERROR_TIMEOUT)
      } finally {
        this.isLoading = false
      }
    }
  }
})
