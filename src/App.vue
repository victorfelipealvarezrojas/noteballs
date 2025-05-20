<template>
  <NavBar />

  <!-- Main content -->
  <div class="container is-max-desktop px-4 py-4">
    <!-- This are render -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
