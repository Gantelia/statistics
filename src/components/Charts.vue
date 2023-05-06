<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Chart } from 'highcharts-vue'
import { useStatsStore } from '@/stores/stats-store'

export default defineComponent({
  components: {
    highcharts: Chart
  },
  setup() {
    const store = useStatsStore()
    const series = store.getChartSeries
    const categoryTitles = store.getCategoryTitles

    const chartOptions = {
      title: {
        text: `Статистика для ${categoryTitles.join(', ')}`
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'проценты %'
        }
      },
      series: series,
      accessibility: { enabled: false }
    }

    return { chartOptions }
  }
})
</script>
