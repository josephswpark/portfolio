import React from 'react';
import NavBar from './components/navbar';
import AboutMe from './pages/about-me';
import Technologies from './pages/technologies';

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div id='about-me' className='about-me'>
          <AboutMe />
        </div>
        <div id='technologies' className='technologies'>
          <Technologies />
        </div>
      </>
    );
  }
}
