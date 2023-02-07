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

const lang = [js, react, node, html, css, sql, express, material];

export default class Technology extends React.Component {
  render() {
    return (
      <Container component="main" maxWidth='md' >
        <center><h1>Technologies</h1></center>
        <Toolbar/>
        <center style={{ justifyContent: 'space-evenly', marginLeft: '1rem' }}>
          {lang.map((item, index) =>
            <img src={item} key={index} className='circle'/>
          )}
        </center>
      </Container>
    );
  }
}
