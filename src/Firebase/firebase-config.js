import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDtLoWYjvgS06ql7eMyz592Xl4MX1ffzC0',
  authDomain: 'learning-firebase-auth-c1959.firebaseapp.com',
  projectId: 'learning-firebase-auth-c1959',
  storageBucket: 'learning-firebase-auth-c1959.appspot.com',
  messagingSenderId: '110567631674',
  appId: '1:110567631674:web:0cfe606bfba67f74fabe03',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
