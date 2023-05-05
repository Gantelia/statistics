<template>
  <div class="wrapper">
    <Header></Header>
    <main class="main">
      <RouterView></RouterView>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  components: { Header, Footer }
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
</style>
