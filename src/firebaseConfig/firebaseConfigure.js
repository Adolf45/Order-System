import { initializeApp } from 'firebase/app';
//import { getDatabase } from "firebase/database";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCMglEdgxw8MMbyoQeeXb3_EnHRdHHXH0",
  authDomain: "app-react-9398a.firebaseapp.com",
  projectId: "app-react-9398a",
  storageBucket: "app-react-9398a.appspot.com",
  messagingSenderId: "47590681377",
  appId: "1:47590681377:web:5e2699a411d63a3d066c60",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
//const database = getDatabase(app);

export default app;
