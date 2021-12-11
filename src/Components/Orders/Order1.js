import React from 'react';
import { Typography, Grid, Card, CardContent,TextField, Button} from '@material-ui/core';
import '../../App.css';

const Orden = () => {
    
    return (
      <><br/><div className="App">

        <Typography gutterBottom variant="h3" align="center">
         Realizar Pedido
        </Typography>
        <Grid>
          <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Antes de realizar tu pedido, debes agregar tu dirección,número de teléfono y email(opcional)
              </Typography>
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} item>
                    <TextField placeholder="Ingrese tu dirección" label="Dirección" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="email" placeholder="Ingrese su correo" label="Email" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="number" placeholder="Ingrese su número de teléfono" label="phone" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Confirmar</Button>
                  </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div></>
    );
  };
  
  export default Orden;