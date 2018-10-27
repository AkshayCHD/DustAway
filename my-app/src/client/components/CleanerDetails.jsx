import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import CountUp from 'react-countup';
import Button from '@material-ui/core/Button';

import * as firebase from 'firebase';
import Nav from '../components/Nav';
import '../../App.css';

class CleanerDetails extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
      return (
        <div className="w3-animate-zoom">
        <center>
          <br />
          <Grid container justify="center" spacing={24}>
            <Grid item >
              <Paper style={{ height: 200, width: 800, padding: 35 }} elevation={4}>
                <Typography variant="display1" gutterBottom>
                    Name: {this.props.cleaner.name}
                </Typography>

                <Typography variant="headline" gutterBottom>
                    Points: {this.props.cleaner.score}
                </Typography>

                <Typography variant="headline" gutterBottom>
                    Region: {this.props.cleaner.region}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        
          <br />
        </center>
        </div>
      );
    }
  
}

export default withRouter(CleanerDetails);