import React from 'react';
import { Typography, Grid, Card, CardContent,TextField, Button} from '@material-ui/core';
import '../../App.css';

const contactForm = () => {
    
    return (
      <><br/><div className="App">

        <Typography gutterBottom variant="h3" align="center">
          Contáctenos
        </Typography>
        <Grid>
          <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Complete el siguiente Formulario
              </Typography>
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} item>
                    <TextField placeholder="Ingrese su nombre" label="Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField placeholder="Ingrese su Apellido" variant="outlined" fullWidth required label="Last name" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="email" placeholder="Ingrese su correo" label="Email" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="number" placeholder="Ingrese su número de teléfono" label="phone" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Message" multiline rows={4} placeholder="Escriba su mensage aquí" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Enviar</Button>
                  </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div></>
    );
  };
  
  export default contactForm;
  