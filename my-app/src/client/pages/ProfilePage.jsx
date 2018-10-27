import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import CountUp from 'react-countup';
import Button from '@material-ui/core/Button';

import CardContent from '@material-ui/core/CardContent';

import Card from '@material-ui/core/Card';
import * as firebase from 'firebase';
import Nav from '../components/Nav';
import '../../App.css';
import CleanerList from '../components/CleanerList'; 
import axios from 'axios';

const cleaners = [
  {
    name: 'Gurpreet',
    points: 700,
    Region: 'ludhiana',
  },
  {
    name: 'Rahul',
    points: 100,
    Region: 'Pahad',
  },
  {
    name: 'Bipin',
    points: 400,
    Region: 'UP',
  },
  {
    name: 'Aman',
    points: 90,
    Region: 'Gaziabad',
  },
];
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        point: 20,
        ether: 0.5,
        cleaners: [],
    };
  }

  componentWillMount() {
    //this.state.cleaners = cleaners;
    setInterval(() => {
      axios.get('https://pechackathon.herokuapp.com/api/')
    .then(res => {
      this.setState({cleaners : res.data});
      console.log(res.data);
    });
    }, 1000)
  //  console.log(this.state.cleaners);
  }


  render() {
      return (
        <div className="background_main">
        <Nav />
        <Card className="timeline_header">
              <CardContent className="flex_view">
                <Typography variant="display3" component="h2" className="timeline_text">
                  Best Cleaners
                </Typography>
              </CardContent>
        </Card>
        <center>
          <CleanerList cleaners={this.state.cleaners}/>
        </center>
        </div>
      );
    }
  
}

export default withRouter(ProfilePage);