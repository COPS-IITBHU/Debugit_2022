// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "secondcycle-bc49d.firebaseapp.com",
  projectId: "secondcycle-bc49d",
  storageBucket: "secondcycle-bc49d.appspot.com",
  messagingSenderId: "236369186528",
  appId: "1:236369186528:web:b225cff7671cdd4ac78a85",
  measurementId: "G-W4GKFPZ21W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);

const analytics = getAnalytics(app);