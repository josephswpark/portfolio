import React from 'react';
import NavBar from './components/navbar';
import AboutMe from './pages/about-me';

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div id='about-me'>
          <AboutMe />
        </div>
        <div id='technologies' />
      </>
    );
  }
}
