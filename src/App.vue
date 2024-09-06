<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'


</script>

<template>
  <div class="background position-fixed overflow-auto">
    <div>
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.background {
  background-color: #292b2c;
  color: #fff;
  width: 100%;
  height: 100vh;
}
</style>

