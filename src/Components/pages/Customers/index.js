import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { onValue, ref, remove } from "@firebase/database";
import database  from "../../../firebaseConfig/firebaseConfigure";
import Navbar from './../../Layout/Navbar';
import { DataGrid } from "@mui/x-data-grid";

const deleteUser = (id) => {
    remove(ref(database, `/users/${id}`))
    .then(() => {
        alert("Cliente eliminado");
    });
}

const columns = [
    {
      field: 'fullName',
      headerName: 'Nombre',
      sortable: false,
      width: 250,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'name') || ''} ${
          params.getValue(params.id, 'lastname') || ''
        }`,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 220,
      },
      {
        field: 'phone',
        headerName: 'Teléfono',
        width: 220,
      },
      {
        field: 'category',
        headerName: 'Categoria',
        width: 220,
      },
      {
          field: "id", headerName: "Opciones", with: 150,
          renderCell: (data) => (
            <IconButton onClick={() => { deleteUser(data.row.id); }} color="primary" aria-label="Eliminar" component="span">
          <DeleteIcon />
          </IconButton>
          )
      }
  ]; 

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let isMounted = true;

        onValue(
            ref(database, "users/"),
            (snapshot) => {
                const usersList = [];

                snapshot.forEach(item => {
                    const userItem = {
                        id: item.key,
                        ...item.val()
                    };

                   usersList.push(userItem); 
                });

                setUsers(usersList);
            },
            (error) => {
                console.log(error);
            }
        );

            return () => {
                isMounted = false;
            };

    }, []);

    return(
        <><Navbar /><Paper
            sx={{
                p: 3,
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <h3 sx={{ m: 0 }}> Usuarios</h3>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" LinkComponent={Link} to="/clientes/agregar" startIcon={<AddCircleOutlineOutlinedIcon />}>
                        Agregar usuario
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={users}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]} />
                    </div>
                </Grid>
            </Grid>
        </Paper></>
    );
};

export default Users;