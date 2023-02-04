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
      <Container component="main" sx={{ p: 3 }} maxWidth='lg'>
        <Toolbar />
        <Grid container columns={{ xs: 4, md: 12 }} direction='row'>
          <Grid item xs={6} style={{ justifyContent: 'center' }}>
            <img src={Image} style={{ height: 350, width: 350 }}/>
          </Grid>
          <div className='v1' />
          <Grid item xs={4}>
            <Toolbar />
            {/* <h1>Hello! I'm Joseph.</h1> */}
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
          </Grid>

        </Grid>
      </Container>
    );
  }
}
