// Import the functions you need from the SDKs you need
/*
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import firebase from 'firebase/app';
import 'firebase/auth';
*/

/* Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);
const storage = getStorage(app)

export {app, db, storage};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();

*/
// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Kv3IT8C3Ia0ds2zXHZ5xzTQkwNQJ1-w",
  authDomain: "fir-tut-99b56.firebaseapp.com",
  projectId: "fir-tut-99b56",
  storageBucket: "fir-tut-99b56.appspot.com",
  messagingSenderId: "996318953821",
  appId: "1:996318953821:web:04b1452369084bad9b68b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
/*session management
export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return user;
};
*/
setPersistence(auth, browserSessionPersistence);
export{app,auth};

