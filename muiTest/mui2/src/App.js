import * as React from 'react';
import {Component} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';
import MediaCard from './MediaCard';
import CardList from './CardList';
import Box from './Box';

/*
todo for portfolio site
1. take new photos of painitngs with DSLR
2. figure out title
3. type artist statement and then figure out a good way to format it
4. Need photo of myself
5. scale to mobile 
*/


class App extends Component {
  render(){
    return(
      //in final site prolly replace h1 with img
      <div>
      <h1>AREUADOR</h1>
      <CardList/>
      </div>


    );

  }
}

export default App;
