import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import sneakerVideo from '../../server/public/sneaker-video.MP4';

export default class Projects extends React.Component {
  render() {
    return (
      <Container component="main" sx={{ p: 3 }} maxWidth='lg' >
        <Toolbar />
        <video src={sneakerVideo}/>
      </Container>
    );
  }
}
