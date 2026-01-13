import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzmrp-U-X3i0iufOOMOSCglbj8K1SUWGQ",
  authDomain: "psikolog-seans.firebaseapp.com",
  projectId: "psikolog-seans",
  storageBucket: "psikolog-seans.firebasestorage.app",
  messagingSenderId: "231673628703",
  appId: "1:231673628703:web:a485a8e1f09cbc32d56d2a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);