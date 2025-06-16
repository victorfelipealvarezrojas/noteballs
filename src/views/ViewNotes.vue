<template>
  <div class="notes">
    <AddEditNotes v-on:pull-note-value="newNote" />
    <ViewNote v-for="unitNote in store.state" :key="unitNote.id" v-bind:unitNote />
  </div>
</template>

<script setup lang="ts">
import ViewNote from '@/components/notes/ViewNote.vue'
import { useNoteStore } from '@/stores/storeNotes'
import AddEditNotes from '@/components/notes/AddEditNotes.vue'

const store = useNoteStore()

const newNote = (value: string) => {
  const currentDate: number = new Date().getTime()
  const id: string = currentDate.toString()
  const note = {
    id: id,
    content: value,
  }
  store.actions.addNote(note)
}
</script>
