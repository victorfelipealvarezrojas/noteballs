<template>
  <div class="stats">
    <table class="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="unitNote in store.state" :key="unitNote.id">
          <td>{{ unitNote.id }}</td>
          <td>{{ unitNote.content }}</td>
        </tr>
      </tbody>
    </table>
    <input
      type="text"
      v-model="textValue"
      class="input is-small"
      placeholder="Do you love noteball?"
      maxlength="100"
      v-autofocus
    />
  </div>
</template>

<script setup lang="ts">
import { vAutofocus } from '@/directives/vAutofocus'
import { useNoteStore } from '@/stores/storeNotes'
import { useWatchCharacter } from '@/use/useWatchCharacter'
import { ref } from 'vue'

const textValue = ref<string>('')

const store = useNoteStore()

useWatchCharacter(textValue)
</script>
