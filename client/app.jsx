import React from 'react';
import NavBar from './components/navbar';
import AboutMe from './pages/about-me';
import Technologies from './pages/technologies';
import { ActiveItem } from 'react-scroll-slider';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      textColor: ''
    };
    this.colorChange = this.colorChange.bind(this);
  }

  colorChange() {
    if (this.state.color === '') {
      this.setState({ color: 'black' });
    } else {
      this.setState({ color: '' });
      this.setState({ textColor: 'white' });
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }} onChange={this.colorChange}>
        <NavBar onChange={{ backgroundColor: this.state.color }} />
        <ActiveItem >
          <div id='profile' className='profile'>
            <AboutMe />
          </div>
          <div id='projects' className='projects'>
            <Projects />
          </div>
          <div id='technologies' className='technologies' onChange={{ color: this.state.textColor }}>
            <Technologies />
          </div>
          <div id='contact' className='contact'>
            <Contact />
          </div>
          <Box component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto'
            }}
          >
            <Container maxWidth="sm" style={{ textAlign: 'center' }}>
              <Copyright />
            </Container>
          </Box>
        </ActiveItem>
      </div>
    );
  }
}

function Copyright() {
  return (
    <Typography style={{ fontFamily: 'Lato' }}variant="body2" color="text.secondary">
      {'Handcrafted by Joseph Park © '}
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
