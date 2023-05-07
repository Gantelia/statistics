<template>
  <div>
    <table class="table">
      <caption class="table__caption">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th>Дата</th>
          <th v-for="title in categoryTitles" v-bind:key="title">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rowData in tableData" v-bind:key="rowData.date">
          <td>{{ rowData.date }}</td>
          <td v-for="value in rowData.values" v-bind:key="value">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStatsStore } from '@/stores/stats-store'

export default defineComponent({
  setup() {
    const store = useStatsStore()
    const categoryTitles = computed(() => store.getCategoryTitles)
    const tableData = computed(() => store.getTableData)
    const caption = computed(() => `Статистика для ${categoryTitles.value.join(', ')}`)

    return {
      categoryTitles,
      tableData,
      caption
    }
  }
})
</script>

<style scoped>
.table {
  border-collapse: collapse;
  text-align: center;
  --column-color: #85bf94;
  --row-color: #ecf3e6;
}

.table__caption {
  font-size: 1.1rem;
  padding: 0.3em;
  margin-bottom: 0.625em;
  font-weight: 700;
}
.table th {
  padding: 0.8em;
  background-color: var(--column-color);
  border: 1px solid #9d7160;
  font-weight: normal;
}

.table th:first-child {
  background-color: var(--row-color);
}

.table td {
  padding: 0.8em;
  border: 1px solid var(--column-color);
}

.table td:first-child {
  background-color: var(--row-color);
  border: 1px solid var(--column-color);
}
</style>
