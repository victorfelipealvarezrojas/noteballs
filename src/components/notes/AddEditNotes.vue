<template>
  <div class="card has-background-success-dark p-4 mb-4">
    <div class="field">
      <div class="control">
        <textarea
          name="textarea"
          class="textarea"
          v-bind:placeholder="titleButton"
          v-model="textAreaValue"
          ref="textareaRef"
          maxlength="100"
          v-autofocus
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          class="button is-link has-background-success"
          v-on:click="newNote"
          v-bind:disabled="!textAreaValue"
        >
          {{ titleButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacter } from '@/use/useWatchCharacter'
import { computed, ref } from 'vue'

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const localValue = ref<string>('')

const emit = defineEmits(['pull-note-value'])

const props = defineProps({
  titleButton: {
    type: String,
    default: 'Add New Note',
  },
  noteEditValue: {
    type: String,
    default: '',
  },
})

// carga el valor del textarea en el caso de que se edite
const textAreaValue = computed({
  get() {
    if (localValue.value === '' && props.noteEditValue !== '') {
      return props.noteEditValue
    }
    return localValue.value
  },
  set(value) {
    localValue.value = value
  },
})

useWatchCharacter(textAreaValue)

const newNote = () => {
  emit('pull-note-value', textAreaValue.value)
  textAreaValue.value = ''
  textareaRef.value!.focus()
}

/*const focusTextarea = () => {
  if (textareaRef.value) {
    textareaRef.value.focus()
  }
}*/
</script>
