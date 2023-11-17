// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1CA9ZzkXUuZ2TIHx_reTauBohQTxmhAw",
  authDomain: "uviex-759de.firebaseapp.com",
  databaseURL: "https://uviex-759de-default-rtdb.firebaseio.com",
  projectId: "uviex-759de",
  storageBucket: "uviex-759de.appspot.com",
  messagingSenderId: "859586588989",
  appId: "1:859586588989:web:58336536b7161461f81554",
  measurementId: "G-5TGJJ3H8QV"
};

// Initialize Firebase
// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app); // Utiliza getFirestore para obtener una instancia de Firestore

export default db;

