//Importando archivos 
import React,{useState} from 'react';
import './App.css';
//import { BrowserRouter as Router } from 'react-router-dom';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Header from './Components/Layout/Navbar';
import Home from './screens/AdminPrueba';
import Login from './../src/screens/LoginRoles';
//import Routes from './Routes';
import app from './firebaseConfig/firebaseConfigure';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore";
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
const [user,setUser] = useState(null);

async function getRol(uid) {
  const docuRef = doc(firestore, `usuarios/${uid}`);
  const docuCifrada = await getDoc(docuRef);
  const infoFinal = docuCifrada.data().rol;
  return infoFinal;
}

function setUserWithFirebaseAndRol(usuarioFirebase) {
  getRol(usuarioFirebase.uid).then((rol) => {
    const userData = {
      uid: usuarioFirebase.uid,
      email: usuarioFirebase.email,
      rol: rol,
    };
    setUser(userData);
    console.log("userData fianl", userData);
  });
}

onAuthStateChanged(auth, (usuarioFirebase) => {
  if (usuarioFirebase) {
    //funcion final

    if (!user) {
      setUserWithFirebaseAndRol(usuarioFirebase);
    }
  } else {
    setUser(null)
  }
});
return <>{user ? <Home user={user} /> : <Login />}</>;

/*
return (
  <>
  <>{user ? <Home user={user} /> : <Login />}</>
    <Router>
      <CssBaseline />

      <Routes />
    </Router></>
  );*/
}

export default App;
