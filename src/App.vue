<template>
  <div id="app">
    <base-layout>
      <router-view />
    </base-layout>
    
  </div>
</template>

<script>
import BaseLayout from '@/layout/BaseLayout.vue'

export default {
  name: 'App',
  components: { BaseLayout }
}
</script>

<style>
  @import "./styles/reset.css";
  @import "./styles/global.css";
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
</style>
