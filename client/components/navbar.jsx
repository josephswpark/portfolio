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
// import Logo from '../../server/public/P.png';
import Resume from '../../server/public/resume.pdf';
import ClearIcon from '@mui/icons-material/Clear';

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
    },
    fourth: {
      main: 'black'
    }
  }
});

const styles = {
  xIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '0.5rem',
    marginRight: 0
  }
};

export default class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      activeLink: 'profile',
      color: '',
      background: ''
    };
    this.isOpen = this.isOpen.bind(this);
    this.isClose = this.isClose.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  isOpen() {
    this.setState({ mobileOpen: true });
  }

  isClose() {
    this.setState({ mobileOpen: false });
  }

  changeColor() {
    const header = document.querySelector('.header');
    const textColor = document.querySelector('#root');
    const color = document.querySelector('.navbar-options');
    const footer = document.querySelector('.footer');
    const icons = document.querySelectorAll('#logo');
    const body = document.querySelector('body');
    header.classList.toggle('dark');
    textColor.classList.toggle('white-text');
    color.classList.toggle('white-text');
    footer.classList.toggle('white-text');
    body.classList.toggle('dark');

    icons.forEach(i => {
      i.classList.toggle('white-text');
    });

    if (this.state.color === '') {
      this.setState({ color: 'white', background: '#e3ded9' });

    } else {
      this.setState({ color: '', background: '' });
    }
  }

  render() {
    return (
      <Box sx={{ display: 'flex' }} >
        <AppBar component="nav" theme={theme} color='third' elevation={0} >
          <Toolbar style={{ justifyContent: 'space-between', paddingTop: '0.5rem' }} className='header' onChange={this.changeColor}>
            <Grid sx={{ flexGrow: 1, display: { sm: 'none' } }}>
              <a type='button' href='#profile' className='button' style={{ border: '2px solid ' + this.state.background }}>
                <span>JOSEPH PARK</span>
              </a>
            </Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={this.isOpen}
              sx={{ mr: 0, display: { sm: 'none' }, flexGorw: 1 }}
            >
              <MenuIcon sx={{ color: this.state.color }} />
            </IconButton>
            <Grid
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <a href='#profile' className='button' style={{ border: '2px solid ' + this.state.background }}>
                <span >JOSEPH PARK
                </span>
              </a>
            </Grid>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="navbar-container" >
              <ul style={{ display: 'flex' }} >
                <li className='navbar-options'>
                  <a href={Resume} target="_blank" rel="noreferrer" className='navbar' id='link' style={{ color: this.state.color }} onChange={this.changeColor}>
                    Resume
                  </a>
                </li>
                <li className='navbar-options'>
                  <a id='link' href='#profile' className='navbar' style={{ color: this.state.color }}>About</a>
                </li>
                <li className='navbar-options'>
                  <a id='link' href='#projects' className='navbar' style={{ color: this.state.color }}>Projects</a>
                </li>
                <li className='navbar-options'>
                  <a id='link' href='#technologies' className='navbar' style={{ color: this.state.color }}>Technologies</a>
                </li>
                <li className='navbar-options'>
                  <a id='link' href='#contact' className='navbar' style={{ color: this.state.color }}>Contact Me</a>
                </li>
                <li className='navbar-options' >
                  <label role="button" htmlFor="checkbox" className="switch header" style={{ backgroundColor: this.state.color }}>
                    <input type="checkbox" id="checkbox" style={{ backgroundColor: this.state.color }} />
                    <span className="switch__ball" />
                    <i className="ri-sun-line switch__sun" style={{ backgroundColor: this.state.color }} />
                    <i className="ri-moon-line switch__moon" style={{ backgroundColor: this.state.color }} />
                  </label>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav" >
          <Drawer
          anchor='right'
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.isClose}
            ModalProps={{
              keepMounted: true
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50%', height: '100%' }
            }}
            PaperProps={{ backgroundColor: 'black' }}
          >
            <span style={styles.xIcon}>
              <ClearIcon onClick={this.isClose} className='xIcon' style={{ marginRight: '0.5rem', cursor: 'pointer' }}/>
            </span>
            <Box onClick={this.isClose} sx={{ textAlign: 'center', mt: 0 }}>
              <ul style={{ paddingLeft: 0 }}>
                <li style={{ marginBottom: '1rem', listStyle: 'none' }}>
                  <a href={Resume} target="_blank" rel="noreferrer" className='navbar' >
                    Resume
                  </a>
                </li>
                <li style={{ marginBottom: '1rem', listStyle: 'none' }}><a className='navbar' id='link' href='#profile' style={{ color: 'black' }}>About</a></li>
                <li style={{ marginBottom: '1rem', listStyle: 'none' }}><a className='navbar' id='link' href='#projects' style={{ color: 'black' }}>Projects</a></li>
                <li style={{ marginBottom: '1rem', listStyle: 'none' }}><a className='navbar' id='link' href='#technologies' style={{ color: 'black' }}>Technologies</a></li>
                <li style={{ marginBottom: '1rem', listStyle: 'none' }}><a className='navbar' id='link' href='#contact' style={{ color: 'black' }}>Contact Me</a></li>
              </ul>
              <ul style={{ display: 'flex', marginTop: '1.8em', justifyContent: 'center', marginLeft: 0 }}>
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
          </Drawer>
        </Box>
      </Box >
    );
  }
}
