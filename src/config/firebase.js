// Firebase configuration and initialization
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  // Firebase config will be added from environment variables
  apiKey: "AIzaSyBYxGNqS9a8i8u_loYcJd5GWT5h4s0IdF4",
  authDomain: "al-razack-tours-internationals.firebaseapp.com",
  projectId: "al-razack-tours-internationals",
  storageBucket: "al-razack-tours-internationals.appspot.com",
  messagingSenderId: "874212021385",
  appId: "1:874212021385:web:9ec104a4f5a92f6b232258",
  measurementId: "G-ZXK987TEVH"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)