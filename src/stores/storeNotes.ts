import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { db, collection, query, getDocs } from '@/ts/firebase'

interface Note {
  id: string
  content: string
}

export interface NoteStore {
  state: Note[]
  actions: {
    getNotes: () => void
    addNote: (note: Note) => void
    removeNote: (id: string) => void
    update: (id: string, content: string) => void
  }
  getters: {
    getNoteContent: (state: Note[]) => (id: string) => string | undefined
  }
}

export const useNoteStore = defineStore('store-notes', (): NoteStore => {
  const notes = reactive<Note[]>([])

  return {
    state: notes,
    actions: {
      async getNotes() {
        const querySnapshot = await getDocs(query(collection(db, 'notes')))
        querySnapshot.forEach((doc) => {
          const note = doc.data() as Note
          notes.push(note)
        })
      },

      addNote(note: { id: string; content: string }) {
        notes.unshift(note)
      },
      removeNote(id: string) {
        const index = notes.findIndex((note) => note.id === id)
        if (index !== -1) {
          notes.splice(index, 1)
        }
      },
      update(id: string, content: string) {
        const index = notes.findIndex((note) => note.id === id)
        if (index !== -1) {
          notes[index].content = content
        }
      },
    },
    getters: {
      getNoteContent(state) {
        return (id: string) => {
          const note = state.find((note) => note.id === id)
          return note ? note.content : undefined
        }
      },
    },
  }
})
