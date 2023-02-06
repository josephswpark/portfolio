import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Grid';
import Image from '../../server/public/me2.png';
import Typewriter from 'typewriter-effect';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';

export default class AboutMe extends React.Component {
  render() {
    return (
      <>
        <Container component="main" sx={{ p: 3 }} maxWidth='lg' >
          <Toolbar />
          <Grid container columns={{ xs: 4, md: 12 }} direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs style={{ maxWidth: 500 }}>
              <div className='img-circle'>
                <center><img src={Image} style={{ height: 350, width: 350, marginTop: '0.5rem' }} /></center>
              </div>
            </Grid>
            <div style={{ display: 'flex' }}>
              <div className='v1' />
              <Grid item xs={12}>
                <h2>Hello! <span className="wave">👋🏻</span> <br/>My name is Joseph.</h2>
                <div className="App">
                  <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString('Problem Solver')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('Web Developer')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('End-User Focused Engineer')
                    .start();
                }}
              />
                </div>
                <p>
                  I&apos;m a Software Engineer with a passion for creating innovative seamless UX.
                </p>
                <p className='me'>
                  I have a passion for designing visually appealing apps with exceptional <br/>
                  user experience. I am also focused on creating simple, yet effective <br/>
                  solutions to enhance the performance of applications. Above all, my curious <br/>
                  nature drives me to continuously learn and grow 📚.
                </p>
                <p>
                  In my free time, I enjoy playing basketball 🏀 and exploring new dining experiences!
                </p>
              </Grid>
            </div>
          </Grid>
        </Container>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, maxHeight: 500 }}>
          <ul style={{ display: 'block', justifyContent: 'center' }}>
            <li style={{ marginBottom: '1.5rem' }}><IconButton disableRipple href="https://www.linkedin.com/in/josephswpark/" target="_blank">
              <LinkedInIcon fontSize='large' className='logo-button' /></IconButton>
            </li>
            <li style={{ marginBottom: '1.5rem' }}><IconButton disableRipple href="https://github.com/josephswpark" target="_blank">
              <GitHubIcon fontSize='large' className='logo-button' /></IconButton>
            </li>
            <li ><IconButton disableRipple href="mailto:park.josephsw@gmail.com?subjust=subject text">
              <MailOutlineIcon fontSize='large' className='logo-button' /></IconButton>
            </li>
          </ul>
        </Box>
        <Grid component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} style={{ textAlign: 'center' }} className='arrow bounce'>
          <KeyboardArrowDownIcon/>
        </Grid>
      </>
    );
  }
}
