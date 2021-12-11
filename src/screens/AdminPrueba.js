import React from "react";
import '../App.css'
import AdminView from "../Components/ViewsUsers/AdminView";
import UserView from "../Components/ViewsUsers/UserView";
import app from "../firebaseConfig/firebaseConfigure";
import { getAuth,signOut } from 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes';
import Navbar from '../Components/Layout/Navbar';

const auth = getAuth(app);


function Home( {user}) {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes />
    </Router><></>
   
    <div>
      
      <center><button onClick={() => signOut(auth)}> Cerrar sesión</button></center>
      {user.rol === "admin" ? <AdminView /> : <UserView />}
    </div></>
  );
}

export default Home;