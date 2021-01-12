<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from './layout/Layout.vue'



export default {
  name: 'App',
  components: { Layout },
}
</script>

<style>
  @import "./styles/reset.css";
  @import "./styles/global.css";
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
</style>
