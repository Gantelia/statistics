<template>
  <div class="wrapper">
    <Header></Header>
    <main class="main">
      <RouterView v-if="hasData"></RouterView>
      <p class="loader" v-else-if="isLoading">Загрузка...</p>
      <p class="no-data" v-else>Нет данных для отображения</p>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useStatsStore } from './stores/stats-store'

export default defineComponent({
  components: { Header, Footer },
  setup() {
    const store = useStatsStore()

    onMounted(() => {
      store.fetchStats()
    })

    const isLoading = computed(() => store.isLoading)
    const hasData = computed(() => store.hasData)
    return { hasData, isLoading }
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

.no-data {
  font-size: 1.2rem;
  text-align: center;
}

.loader {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
