import React, { useState } from "react";
import Navbar from './../Components/Layout/NavbarSimple';
import {
  HomeContainer
  
} from '../Components/Home/HomeElements';
import { Grid, Card, CardContent,TextField} from '@material-ui/core';
import '../App.css';
import app from "../firebaseConfig/firebaseConfigure";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
//import { BrowserRouter as Router } from 'react-router-dom';
//import Routes from '../Routes';
const auth = getAuth(app);



function Login() {
  const firestore = getFirestore(app);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol });
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log("submit", email, password, rol);

    if (isRegistrando) {
      // registrar
      registrarUsuario(email, password, rol);
    } else {
      // login
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
    <>
    
    <Navbar />
   
    
    
    
      <HomeContainer>
    
    <br/><div className="App">

        
        <h1>{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
        
        <Grid>
          <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              
              <form onSubmit={submitHandler} >
                <Grid container spacing={1}>
                  
                  <Grid item xs={12}>
                    <TextField type="email" name="user_email_sesion"  type="email" id="email" placeholder="Ingrese su correo" label="Email" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="password" name="password" id="password" placeholder="Escribe tu contraseña" label="password" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                  <select id="rol">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="submit"
                           value={isRegistrando ? "Registrar" : "Iniciar sesión"} />
                  </Grid>
                </Grid>
              </form>
              <br />
              <button onClick={() => setIsRegistrando(!isRegistrando)}>
                 {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
                  </button>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </HomeContainer></>
  );
    }

export default Login;