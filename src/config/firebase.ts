import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC1bZs0lB-zo-KtqF3H3rcLv2icrxCnf94",
  authDomain: "sri-app-bd449.firebaseapp.com",
  projectId: "sri-app-bd449",
  storageBucket: "sri-app-bd449.appspot.com", // ✅ fix typo: it should be .appspot.com
  messagingSenderId: "906877119799",
  appId: "1:906877119799:web:ff0af55b1c51956cca7eb2",
  measurementId: "G-YR4WY10QR2",
};

// ✅ Check if Firebase app is already initialized
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = getApp(); // reuse existing
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
