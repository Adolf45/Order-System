//Importando archivos 
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Header from './Components/Layout/Navbar'
import Routes from './Routes';


function App() {

  return (
    <Router >
     <CssBaseline />
  
          <Routes />  
    </Router>
  );
};

export default App;
