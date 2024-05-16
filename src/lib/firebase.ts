import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyAx1I6EeFoN6Pf6AKKRSZGK2glbabL843I",
  authDomain: "flooffy-linker.firebaseapp.com",
  projectId: "flooffy-linker",
  storageBucket: "flooffy-linker.appspot.com",
  messagingSenderId: "1018248969755",
  appId: "1:1018248969755:web:84367fcddfe5602ccb82be",
  measurementId: "G-LD4PEGL1Z0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();