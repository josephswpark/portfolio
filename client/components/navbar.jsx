import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Grid from '@mui/material/Grid';
import Logo from '../../server/public/P.png';
import Resume from '../../server/public/resume.pdf';

const theme = createTheme({
  palette: {
    primary: {
      main: '#597161'
    },
    secondary: {
      main: '#e3ded9'
    },
    third: {
      main: '#ffff'
    }
  }
});

export default class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      activeLink: 'profile'
    };
    this.isOpen = this.isOpen.bind(this);
    this.isClose = this.isClose.bind(this);
    this.setActiveLink = this.setActiveLink.bind(this);
  }

  isOpen() {
    this.setState({ mobileOpen: true });
  }

  isClose() {
    this.setState({ mobileOpen: false });
  }

  // onClick() {

  // }
  setActiveLink() {
    this.setState({ activeLink: 'technologies' });
  }

  render() {

    return (
      <Box sx = {{ display: 'flex' }}>
        <AppBar component="nav" theme={theme} color='third' elevation={0}>
          <Toolbar style={{ justifyContent: 'space-between' }} >
            <Grid sx={{ flexGrow: 1, display: { sm: 'none' } }}>
              <img src={Logo} style={{ width: 125, paddingTop: '0.5rem' }}/>
            </Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={this.isOpen}
              sx={{ mr: 0, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <img src={Logo} style={{ width: 150, paddingTop: '0.5rem' }} />
            </Grid>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="navbar-container" >
              <ul style={{ display: 'flex' }} >
                <li>
                  <a href={Resume} target="_blank" rel="noreferrer" className='resume'>
                    Resume
                  </a>
                </li>
                <li>
                  <a id='link' href='#profile' onClick={this.setActiveLink}>Profile</a>
                  <div className="underline" />
                </li>
                <li>
                  <a id='link' href='#projects'>Projects</a>
                  <div className="underline" />
                </li>
                <li >
                  <a id='link' href='#technologies' onClick={this.setActiveLink}>Technologies</a>
                  <div className="underline" />
                </li>
                <li >
                  <a id='link' href='#contact-me'>Contact Me</a>
                  <div className="underline" />
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav" >
          <Drawer PaperProps={{ sx: { backgroundColor: '#e3ded9' } }}
          anchor='top'
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.isClose}
            ModalProps={{
              keepMounted: true
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 390, height: 300 }
            }}
          >
            <Box onClick={this.isClose} sx={{ textAlign: 'center', mt: '2rem' }}>
              <ul>
                <li style={{ marginBottom: '1rem' }}><a id='link' href='#profile' style={{ color: 'black' }}>Profile</a></li>
                <li style={{ marginBottom: '1rem' }}><a id='link' href='#technologies' style={{ color: 'black' }}>Technologies</a></li>
                <li style={{ marginBottom: '1rem' }}><a id='link' href='#projects' style={{ color: 'black' }}>Projects</a></li>
                <li style={{ marginBottom: '1rem' }}><a id='link' href='#contact-me' style={{ color: 'black' }}>Contact Me</a></li>
              </ul>
              <ul style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <li ><IconButton href="https://www.linkedin.com/in/josephswpark/" target="_blank">
                  <LinkedInIcon fontSize='large' /></IconButton>
                </li>
                <li ><IconButton href="https://github.com/josephswpark" target="_blank">
                  <GitHubIcon fontSize='large' /></IconButton>
                </li>
                <li ><IconButton href="mailto:park.josephsw@gmail.com?subjust=subject text">
                  <MailOutlineIcon fontSize='large' /></IconButton>
                </li>
              </ul>
            </Box>
          </Drawer>
        </Box>
      </Box >
    );
  }
}
