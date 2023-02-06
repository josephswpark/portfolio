import React from 'react';
import NavBar from './components/navbar';
import AboutMe from './pages/about-me';
import Technologies from './pages/technologies';
import { ActiveItem } from 'react-scroll-slider';
import Projects from './pages/projects';

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
        </ActiveItem>
      </>
    );
  }
}
