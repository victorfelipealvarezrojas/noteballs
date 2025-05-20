<template>
  <div class="notes">
    <AddEditNotes v-on:pull-note-value="newNote" />
    <ViewNote
      v-for="unitNote in store.state"
      :key="unitNote.id"
      v-bind:unitNote
      v-on:deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup lang="ts">
import ViewNote from '@/components/notes/ViewNote.vue'
import { useNoteStore } from '@/stores/storeNotes'
import AddEditNotes from '@/components/notes/AddEditNotes.vue'

const store = useNoteStore()

const newNote = (value: string) => {
  console.log('newNote', value)
  const currentDate: number = new Date().getTime()
  const id: string = currentDate.toString()
  const note = {
    id,
    content: value,
  }
  store.actions.addNote(note)
}

const deleteNote = (id: string) => {
  store.actions.removeNote(id)
}
</script>
