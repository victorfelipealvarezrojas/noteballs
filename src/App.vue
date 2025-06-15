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
import { useNoteStore } from '@/stores/storeNotes'
import { onMounted } from 'vue'

const storeNotes = useNoteStore()

onMounted(() => {
  storeNotes.actions.getNotes()
})
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
