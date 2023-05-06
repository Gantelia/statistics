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

    const chartOptions = {
      series: [
        {
          data: [1, 2, 3]
        }
      ]
    }

    return { chartOptions }
  }
})
</script>
