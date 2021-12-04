//Importando componentes 

import React from 'react';
import {Route, Switch } from 'react-router-dom';

//import Login from './Components/Login';
//import Signup from './Components/Signup';
import Home from './Components/Home/home';
import Contact from './Components/Contact Us/contactForm';
import IndexAdmin from './Components/Layout/index';
import Customers from './Components/pages/Customers';
import CustomersForm from './Components/pages/Customers/CustomerFrom';
const Routes = () => (   
 <Switch>
     
     <Route exact path="/" component={Home} />
     
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/Admin" component={IndexAdmin}/> 
     <Route exact path="/clientes" component={Customers}/>
     <Route exact path="/clientes/agregar" component={CustomersForm}/>
 </Switch>
);

export default  Routes;