import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from '../../server/public/me2.png';
import Typewriter from 'typewriter-effect';

export default class AboutMe extends React.Component {
  render() {
    return (
      <Container component="main" sx={{ p: 3 }} maxWidth='lg' >
        <Toolbar />
        <Grid container columns={{ xs: 4, md: 12 }} direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={5}>
            <div className='img-circle'>
              <center><img src={Image} style={{ height: 350, width: 350, marginTop: '0.35rem' }} /></center>
            </div>
          </Grid>
          <div style={{ display: 'flex' }}>
            <div className='v1' />
            <Grid item>
              <h1>Hi There! <span className="wave">👋🏻</span> I&apos;m Joseph.</h1>
              <div className="App">
                <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString('GeeksForGeeks')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Welcomes You')
                    .start();
                }}
              />
              </div>
              <p>
                I&apos;m a Software Engineer with a passion for creating innovative seamless UX.
              </p>
            </Grid>
          </div>
        </Grid>
      </Container>
    );
  }
}
