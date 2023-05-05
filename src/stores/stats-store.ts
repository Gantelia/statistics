import { defineStore } from 'pinia'
import type { Store } from '../types/data'

export const useStatsStore = defineStore('statsStore', {
  state: (): Store => ({
    hasData: false,
    data: []
  })
})
