<template>
  <div class="wrapper">
    <Header></Header>
    <main class="main">
      <RouterView v-if="hasData"></RouterView>
      <p class="no-data" v-else>Нет данных для отображения</p>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useStatsStore } from './stores/stats-store'

export default defineComponent({
  components: { Header, Footer },
  setup() {
    const store = useStatsStore()
    const hasData = store.hasData

    return { hasData }
  }
})
</script>

<style>
.wrapper {
  height: 100%;
  max-width: 800px;
  margin-inline: auto;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.main {
  flex-grow: 1;
  padding: 30px;
}

.no-data {
  font-size: 1.2rem;
  text-align: center;
}
</style>
