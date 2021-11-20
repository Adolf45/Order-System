//Importando componentes 

import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home/home'

const Routes = () => (   
 <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/signup"  component={Signup} />
 </Switch>
);

export default  Routes;