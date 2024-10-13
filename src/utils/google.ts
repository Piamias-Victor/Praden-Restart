// src/firebase.ts

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// Configuration Firebase - Remplace ces valeurs avec celles de ton projet Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyD8cZMXD8YBglt9eWpk2KSyrQcTKe8wLRs',
  authDomain: 'praden-4db12.firebaseapp.com',
  projectId: 'praden-4db12',
  storageBucket: 'praden-4db12.appspot.com',
  messagingSenderId: '103415051132',
  appId: '1:103415051132:web:61b08e9fc1dacceb016af9',
  measurementId: 'G-RD9P3SEGJ7'
}

// Initialiser Firebase
const app = initializeApp(firebaseConfig)

// Authentification Firebase
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// Fonction de connexion avec Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    // Tu peux utiliser user pour gérer la connexion utilisateur
    console.log('User info: ', user)
    return user // Retourner l'utilisateur si tu veux l'utiliser dans l'application
  } catch (error) {
    console.error('Erreur de connexion: ', error)
    throw error // Propager l'erreur si nécessaire
  }
}

export { signInWithGoogle, auth, provider }
