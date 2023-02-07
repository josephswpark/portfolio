import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';

export default class Contact extends React.Component {
  render() {
    return (
      <Container component="main" sx={{ p: 0 }} maxWidth='lg' >
        <div style={{ display: 'flex', marginLeft: '2rem' }}>
          <Grid item xs={12} style={{ maxWidth: 550 }}>
            <div style={{ display: 'flex', lineHeight: '0.5rem' }}>
              <h3>Contact!</h3>
            </div>
            <p style={{ marginTop: 0 }}>
              Please feel free to reach out if you have any questions, or just want to connect!
            </p>
            <Box >
              <ul style={{ display: 'flex', paddingLeft: 0 }}>
                <li style={{ marginRight: 0 }} className='navbar-options'><IconButton style={{ padding: 0 }} disableRipple href="https://www.linkedin.com/in/josephswpark/" target="_blank">
                  <LinkedInIcon fontSize='large' className='logo-button' /></IconButton>
                </li>
                <li style={{ marginRight: 0 }} className='navbar-options'><IconButton style={{ padding: 0 }} disableRipple href="https://github.com/josephswpark" target="_blank">
                  <GitHubIcon fontSize='large' className='logo-button' /></IconButton>
                </li>
                <li className='navbar-options'><IconButton disableRipple style={{ padding: 0 }} href="mailto:park.josephsw@gmail.com?subjust=subject text">
                  <MailOutlineIcon fontSize='large' className='logo-button' /></IconButton>
                </li>
              </ul>
            </Box>
          </Grid>
        </div>
      </Container>
    );
  }
}
