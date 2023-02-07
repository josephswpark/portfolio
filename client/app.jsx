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
  render() {
    return (
      <>
        <NavBar />
        <ActiveItem >
          <div id='profile' className='profile'>
            <AboutMe />
          </div>
          <div id='projects' className='projects'>
            <Projects />
          </div>
          <div id='technologies' className='technologies'>
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
      </>
    );
  }
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Handcrafed by Joseph Park © '}
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
