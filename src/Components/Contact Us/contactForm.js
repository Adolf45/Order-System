import React from 'react';
import { Typography, Grid, Card, CardContent,TextField, Button} from '@material-ui/core';
import '../../App.css';
import emailjs from 'emailjs-com';
//import Header from '../Layout/Navbar';

const contactForm = () => {
      
     function sendEmail(e){
       e.preventDefault();

      emailjs.sendForm("service_anwvkv3","template_yd4utfm",e.target,
       "user_9H2wRMnew5tuFestrcrwN").then(res=>{
         console.log(res);
         alert("Mensaje enviado con éxito!");

       }).catch(err=> console.log(err));
     }

    return (
      <>
      
      <br/>

        <Typography gutterBottom variant="h3" align="center">
          Contáctenos
        </Typography>
        <Grid>
          <Card style={{ maxWidth: 550, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Complete el siguiente Formulario
              </Typography>
              <form onSubmit={sendEmail} >
                <Grid container spacing={1}>
                  <Grid xs={12} item>
                    <TextField   name="name"placeholder="Ingrese su nombre" className="n" label="Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField  name="Lastname" placeholder="Ingrese su Apellido" variant="outlined" fullWidth required label="Last name" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="email" name="user_email" placeholder="Ingrese su correo" label="Email" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="number" name="phone" placeholder="Ingrese su número de teléfono" label="phone" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Message" name="message" multiline rows={4} placeholder="Escriba su mensage aquí" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" value="Send" fullWidth>Enviar</Button>
                  </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <br/>
      </>
    );
  };
  
  export default contactForm;
  