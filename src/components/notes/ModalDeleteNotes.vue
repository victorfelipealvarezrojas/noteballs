<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note</p>
        <button class="delete" aria-label="close" v-on:click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="content">
          <p>Are you sure you want to delete this note? {{ props.id }}</p>
          <p class="has-text-weight-bold">This action cannot be undone.</p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button is-danger" v-on:click="deleteNote(props.id)">Delete</button>
          <button class="button" v-on:click="closeModal">Cancel</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNoteStore } from '@/stores/storeNotes'
import { onMounted, onUnmounted } from 'vue'

const store = useNoteStore()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
  emit('update:modelValue', false)
}

const handleKeyboardEvent = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}

const deleteNote = (id: string) => {
  store.actions.removeNote(id)
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyboardEvent)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboardEvent)
})
</script>
