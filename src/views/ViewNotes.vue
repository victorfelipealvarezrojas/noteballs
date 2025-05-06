<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-4">
      <div class="field">
        <div class="control">
          <textarea
            name="textarea"
            class="textarea"
            placeholder="Add a new note"
            v-model="textAreaValue"
            ref="textarearef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            v-on:click="submitForm"
            v-bind:disabled="!textAreaValue"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <ViewNote v-for="unitNote in notes" :key="unitNote.id" v-bind:unitNote />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ViewNote from '@/components/notes/ViewNote.vue'

const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur laborum totam nobis, laboriosam asperiores soluta eum quasi dolore iste dolorem, mollitia eos iusto! Tenetur non fuga accusamus repellat modi.',
  },
  {
    id: 'id2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur laborum totam nobis, laboriosam asperiores soluta eum quasi dolore iste dolorem, mollitia eos iusto! Tenetur non fuga accusamus repellat modi.',
  },
])

const textAreaValue = ref('')
const textarearef = ref<HTMLElement>()

const submitForm = () => {
  const currentDate = new Date().getTime()
  const id = currentDate.toString()

  const note = {
    id,
    content: textAreaValue.value,
  }

  notes.value.unshift(note)
  textAreaValue.value = ''
  if (textarearef.value) {
    textarearef.value.focus()
  }
}
</script>
