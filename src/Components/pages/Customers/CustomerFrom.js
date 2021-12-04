import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import { useState } from "react";
import { ref, push } from "firebase/database";
import { withRouter } from "react-router-dom";
import database from "../../../firebaseConfig/firebaseConfigure";
import Navbar from '../../Layout/Navbar';


const UserForm = (props) => {
    const [user, setUser] = useState ({
        name: '',
        lastname:'',
        email:'',
        phone:'',
        category:'',
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        push(ref(database, "/users"), user)
        .then(() => {
            //redireccionar a /clientes
            props.history.push("/clientes");
        })
        .catch((error) => {
            console.log(error);
        });
    };


    return (
        <><Navbar /><Paper
            sx={{
                p: 3,
            }}
        >
            <Grid container spacing={2} component="form" onSubmit={handleSubmit}
                sx={{ mt: 3, justify: 'center' }}
            >
                <Grid item container xs={12} md={6} spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="name"
                            required
                            fullWidth
                            label="Nombre"
                            value={user.name}
                            onChange={handleChange}
                            autoFocus />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="lastname"
                            required
                            fullWidth
                            label="Apellidos"
                            value={user.lastname}
                            onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            type="email"
                            required
                            fullWidth
                            label="Email"
                            value={user.email}
                            onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="phone"
                            required
                            fullWidth
                            label="Teléfono"
                            value={user.phone}
                            onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="category"
                            required
                            fullWidth
                            label="Categoria"
                            value={user.category}
                            onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sx={{ m: 5, texAling: 'center' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            startIcon={<DataSaverOffOutlinedIcon />}>
                            Guardar usuario
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper></>
    );
};

export default withRouter(UserForm);