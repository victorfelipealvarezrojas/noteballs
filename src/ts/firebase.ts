import { initializeApp } from 'firebase/app'
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA2PSeb4N2nD1D840f8Jp8XpQ9vzVRjrCg',
  authDomain: 'app-vue-pock.firebaseapp.com',
  projectId: 'app-vue-pock',
  storageBucket: 'app-vue-pock.firebasestorage.app',
  messagingSenderId: '811193606529',
  appId: '1:811193606529:web:dbea6ef7e8b89cabd60880',
  measurementId: 'G-S50ED4NNYW',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db, collection, query, getDocs }
