import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import node from '../../server/public/node.png';
import react from '../../server/public/react.png';
import js from '../../server/public/js.png';
import css from '../../server/public/css.png';
import html from '../../server/public/html.png';
import express from '../../server/public/express.png';
import material from '../../server/public/material.png';
import sql from '../../server/public/sql.png';

export default class Technology extends React.Component {
  render() {
    return (
      <Container component="main" sx={{ p: 3 }} maxWidth='md' >
        <Toolbar/>
        <center><h1>Technologies</h1></center>
        <center>
          <img src={js} style={{ width: 150, height: 150 }}/>
          <img src={react} style={{ width: 150, height: 150 }} />
          <img src={node} style={{ width: 150, height: 150 }} />
          <img src={html} style={{ width: 150, height: 150 }} />
          <img src={css} style={{ width: 150, height: 150 }} />
          <img src={sql} style={{ width: 150, height: 150 }} />
          <img src={express} style={{ width: 200, height: 150 }} />
          <img src={material} style={{ width: 150, height: 150 }} />
        </center>
      </Container>
    );
  }
}
