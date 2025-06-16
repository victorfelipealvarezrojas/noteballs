import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { db, collection, onSnapshot } from '@/ts/firebase'
import { addDoc, deleteDoc, doc, orderBy, query, setDoc } from 'firebase/firestore'

const noteCollectionRef = collection(db, 'notes')
const noteCollectionQuery = query(noteCollectionRef, orderBy('date', 'desc'))

interface Note {
  id: string
  content: string
}

export interface NoteStore {
  state: Note[]
  actions: {
    getNotes: () => void
    addNote: (note: Note) => void
    removeNote: (date: string) => void
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
      getNotes() {
        onSnapshot(noteCollectionQuery, (querySnapshot) => {
          const _notes: Note[] = []
          querySnapshot.forEach((doc) => {
            const note = {
              id: doc.id,
              content: doc.data().content,
            }
            _notes.push(note)
          })
          notes.length = 0
          notes.push(..._notes)
        })
      },

      async addNote(note: { id: string; content: string }) {
        const currentDate = new Date().getTime()
        const date = currentDate.toString()

        await addDoc(noteCollectionRef, {
          content: note.content,
          date,
        })
      },
      async removeNote(date: string) {
        const noteRef = doc(noteCollectionRef, date)
        await deleteDoc(noteRef)
      },
      update(id: string, content: string) {
        const noteRef = doc(noteCollectionRef, id)
        setDoc(noteRef, { content }, { merge: true })
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
