import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface Note {
  id: string
  content: string
}

export interface NoteStore {
  state: Note[]
  actions: {
    addNote: (note: Note) => void
    removeNote: (id: string) => void
    update: (id: string, content: string) => void
  }
  getters: {
    getNoteContent: (
      state: Note[],
    ) => (id: string) => string | undefined
  }
}

// prettier-ignore
export const useNoteStore = defineStore('store-notes', (): NoteStore => {

  const notes = reactive([ {
        id: "1",
        content: 'This is the content of note 1'
      },
      {
        id: "2",
        content: 'This is the content of note 2'
      },
      {
        id: "3",
        content: 'This is the content of note 3'
      }
    ])

  return {
    state: notes,
    actions: {
      addNote(note: { id: string, content: string }) {
        notes.unshift(note)
      },
      removeNote(id: string) {
        const index = notes.findIndex(note => note.id === id)
        if (index !== -1) {
          notes.splice(index, 1)
        }
      },
      update(id: string, content: string) {
        const index = notes.findIndex(note => note.id === id)
        if (index !== -1) {
          notes[index].content = content
        }
      }
    },
    getters:{
      getNoteContent(state) {
        return (id: string) => {
          const note = state.find(note => note.id === id)
          return note ? note.content : undefined
        }
      }
    }
  }
})
