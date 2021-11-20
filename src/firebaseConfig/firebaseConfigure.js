import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
        apiKey: "AIzaSyDuxdyub_p0FvbRLITqA7Ei3WxtqM5pbfo",
        authDomain: "api-bd-firebase.firebaseapp.com",
        databaseURL: "https://api-bd-firebase-default-rtdb.firebaseio.com",
        projectId: "api-bd-firebase",
        storageBucket: "api-bd-firebase.appspot.com",
        messagingSenderId: "625109062762",
        appId: "1:625109062762:web:b03e7222adc3fa0bb26613",
        measurementId: "G-3GKZS7KCVM"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default database;