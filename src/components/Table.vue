<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th v-for="title in categoryTitles">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rowData in tableData">
          <td>{{ rowData.date }}</td>
          <td v-for="value in rowData.values">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStatsStore } from '@/stores/stats-store'

export default defineComponent({
  setup() {
    const store = useStatsStore()
    const categoryTitles = store.getCategoryTitles
    const tableData = store.getTableData

    return {
      categoryTitles,
      tableData
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
.table th {
  padding: 0.8em;
  background-color: var(--column-color);
  border: 1px solid #7c6359;
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
