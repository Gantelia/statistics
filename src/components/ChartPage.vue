<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Chart } from 'highcharts-vue'
import { useStatsStore } from '@/stores/stats-store'

export default defineComponent({
  components: {
    highcharts: Chart
  },
  setup() {
    const store = useStatsStore()
    const series = computed(() => store.getChartSeries)
    const categoryTitles = computed(() => store.getCategoryTitles)

    const chartOptions = {
      title: {
        text: `Статистика для ${categoryTitles.value.join(', ')}`
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'проценты %'
        }
      },
      series: series.value,
      accessibility: { enabled: false }
    }

    return { chartOptions }
  }
})
</script>
