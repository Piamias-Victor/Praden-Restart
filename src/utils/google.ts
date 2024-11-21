// src/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Configuration Firebase - Remplace ces valeurs avec celles de ton projet Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyD8cZMXD8YBglt9eWpk2KSyrQcTKe8wLRs',
  authDomain: 'praden-4db12.firebaseapp.com',
  projectId: 'praden-4db12',
  storageBucket: 'praden-4db12.appspot.com',
  messagingSenderId: '103415051132',
  appId: '1:103415051132:web:61b08e9fc1dacceb016af9',
  measurementId: 'G-RD9P3SEGJ7',
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Authentification Firebase
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Fonction de connexion avec Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export { signInWithGoogle, auth, provider };
