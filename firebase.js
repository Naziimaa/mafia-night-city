
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk-F43Oh4rrO4kg7YZCHmSUXgRtkpBan0",
  authDomain: "mafia-night-city.firebaseapp.com",
  databaseURL: "https://mafia-night-city-default-rtdb.firebaseio.com",
  projectId: "mafia-night-city",
  storageBucket: "mafia-night-city.firebasestorage.app",
  messagingSenderId: "461053777152",
  appId: "1:461053777152:web:b19189d678ba1c32254fe5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

export function initializePlayer() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        unsubscribe();
        resolve(user);
      }
    }, reject);

    signInAnonymously(auth).catch(error => {
      unsubscribe();
      reject(error);
    });
  });
}