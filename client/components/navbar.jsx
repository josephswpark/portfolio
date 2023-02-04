import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#597161'
    },
    secondary: {
      main: '#e3ded9'
    }
  }
});

export default class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.isOpen = this.isOpen.bind(this);
    this.isClose = this.isClose.bind(this);
  }

  isOpen() {
    this.setState({ mobileOpen: true });
  }

  isClose() {
    this.setState({ mobileOpen: false });
  }

  render() {

    return (
      <Box sx = {{ display: 'flex' }} >
        <AppBar component="nav" theme={theme} color='primary' >
          <Toolbar style={{ justifyContent: 'flex-end' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={this.isOpen}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              JP
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul style={{ display: 'flex' }}>
                <li><a id='link' href='#about-me'>About Me</a></li>
                <li><a id='link' href='#technologies'>Technologies</a></li>
                <li><a id='link' href='#projects'>Projects</a></li>
                <li><a id='link' href='#contact-me'>Contact Me</a></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav" >
          <Drawer PaperProps={{ sx: { backgroundColor: '#e3ded9' } }}
          anchor='top'
            // container={container}
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.isClose}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 390, height: 300 }
            }}
          >
            <Box onClick={this.isClose} sx={{ textAlign: 'center', mt: '2rem' }}>
              <ul>
                <li style={{ marginBottom: '1rem' }}><a id='link' href='#about-me' style={{ color: 'black' }}>About Me</a></li>
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
