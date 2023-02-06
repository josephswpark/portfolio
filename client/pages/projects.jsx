import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import Img from '../../server/public/home-image.jpeg';
import Binge from '../../server/public/binge-1.jpg';
import LaunchIcon from '@mui/icons-material/Launch';

export default class Projects extends React.Component {
  render() {
    return (
      <>
        <Container component="main" sx={{ p: 3 }} maxWidth='lg' >
          <Toolbar />
          <Grid style={{ }}>
            <h2>Projects</h2>
            <p style={{ marginBottom: '3rem' }}>
              These are some personal projects that were inspired by my interests.<br/>
              Feel free to browse through the website!
            </p>
          </Grid>
          <Grid container columns={{ xs: 4, md: 12 }} direction='row' justifyContent='flex-start' alignItems='center'>
            <Grid item xs style={{ maxWidth: 390 }} >
              <img src={Img} style={{ width: 350, height: 225, borderRadius: '1rem' }}/>
              <div style={{ display: 'flex', lineHeight: '0.5rem' }}>
                <h3>Sneaker World</h3>
                <a href='https://sneaker-world.josephswpark.dev/' target='_blank' rel="noreferrer">
                  <LaunchIcon className='launch-icon'/>
                </a>
              </div>
              <p style={{ maxWidth: 300, marginTop: 0 }}>
                A web application for clients to purchase sneakers of their choice.
              </p>
            </Grid>
            <div style={{ display: 'flex' }}>
              <Grid item xs style={{ maxWidth: 390 }} >
                <img src={Binge} style={{ width: 350, height: 225, borderRadius: '1rem' }} />
                <div style={{ display: 'flex', lineHeight: '0.5rem' }}>
                  <h3>Binge</h3>
                  <a href='https://josephswpark.github.io/binge/' target='_blank' rel="noreferrer">
                    <LaunchIcon className='launch-icon' />
                  </a>
                </div>
                <p style={{ maxWidth: 300, marginTop: 0 }}>
                  A web application for clients to purchase sneakers of their choice.
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
      </>
    );
  }
}
