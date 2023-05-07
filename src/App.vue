<template>
  <div class="wrapper">
    <PageHeader></PageHeader>
    <main class="main">
      <RouterView v-if="hasData"></RouterView>
      <p class="loader" v-else-if="isLoading">Загрузка...</p>
      <p class="error" v-else-if="isError">
        Что-то пошло не так...<br />Попробуйте перезагрузить страницу или повторите попытку позже
      </p>
      <p class="no-data" v-else>Нет данных для отображения</p>
    </main>
    <PageFooter></PageFooter>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import { useStatsStore } from './stores/stats-store'

export default defineComponent({
  components: { PageHeader, PageFooter },
  setup() {
    const store = useStatsStore()

    onMounted(() => {
      store.fetchStats()
    })

    const hasData = computed(() => store.hasData)
    const isLoading = computed(() => store.isLoading)
    const isError = computed(() => store.isError)
    return { hasData, isLoading, isError }
  }
})
</script>

<style>
.wrapper {
  min-height: 100%;
  max-width: 800px;
  margin-inline: auto;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.main {
  flex-grow: 1;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.loader {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
}

.error {
  text-align: center;
  font-size: 1rem;
  color: #ed3939;
}

.no-data {
  font-size: 1.2rem;
  text-align: center;
}
</style>
