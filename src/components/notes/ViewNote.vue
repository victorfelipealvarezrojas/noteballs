<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ unitNote.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ chLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink class="card-footer-item" v-bind:to="`/editeNotes/${unitNote.id}`"
        >Edit</RouterLink
      >
      <a href="#" class="card-footer-item" v-on:click.prevent="modals.deleteNote = true">Delete</a>
    </footer>
    <ModalDeleteNotes
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      v-bind:id="unitNote.id"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import ModalDeleteNotes from '@/components/notes/ModalDeleteNotes.vue'

const props = defineProps({
  unitNote: {
    type: Object,
    required: true,
  },
})

// prettier-ignore
const chLength = computed(() => {
  const description = props.unitNote.content.length > 1
    ? 'characters'
    : 'character'

  return `${props.unitNote.content.length} ${description}`
})

const modals = reactive({
  deleteNote: false,
})
</script>
