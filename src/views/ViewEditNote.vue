<template>
  <h1>Note Id: {{ $route.params.id }}</h1>
  <AddEditNotes
    v-on:pull-note-value="editNote"
    v-bind:titleButton="'Edit Note'"
    v-bind:placeholder="'Edit your note here...'"
    v-bind:noteEditValue="noteContent"
  />
</template>

<script setup lang="ts">
import AddEditNotes from '@/components/notes/AddEditNotes.vue'
import router from '@/router'
import { useNoteStore } from '@/stores/storeNotes'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const store = useNoteStore()
const route = useRoute()
const noteContent = ref()

const editNote = (value: string) => {
  store.actions.update(route.params.id.toString(), value)
  noteContent.value = value
  router.push({ name: 'notes' })
}

onMounted(() => {
  const note = store.state.find((note) => note.id === route.params.id.toString())
  noteContent.value = note ? note.content : ''
})
</script>
