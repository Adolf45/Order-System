import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
//import {Link} from 'react-router-dom';

export const menuItems = (

  <div>
    <ListItem to="/" >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem to="/" >
      <ListItemIcon>
        <PersonOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>
    <ListItem to="/clientes">
      <ListItemIcon>
        <StorefrontOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
  </div>
);
