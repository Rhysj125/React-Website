import React, { Component } from 'react';
import './App.css';
import {Grid, AppBar, Typography} from '@material-ui/core'
import Carosel from './Components/carosel';
import Info from './Components/info'
import GodCard from './Components/godcard'

const style = {
  margin: '20px'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container align="center">
          <Grid item xs={12}>
            <AppBar position="static" id="appbar">
              <Typography variant="headline" align="center" color="inherit" style={style}>
                The Nine
              </Typography>
            </AppBar>
          </Grid>
          <Grid item xs={12} align="center" className="m">
            <Carosel />
          </Grid>
          <Grid item xs={12}>
            <GodCard godID="10" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
