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

const cleaners = [
  {
    name: 'Gurpreet',
    points: 700,
    Region: 'ludhiana',
  },
  {
    name: 'Rahul',
    points: 500,
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
        cleaners: null,
    };
  }

  componentWillMount() {
    this.state.cleaners = cleaners;
    const rootRef = firebase.database().ref().child('akshay');
    const cleanerRef = rootRef.child('points');
    cleanerRef.on('value', snap=> {

        this.state.cleaners = cleaners;
        this.setState({
            point: snap.val(),
        });
        let p = snap.val();
        let etherAva = p/200;
        let akshay = {
          name: 'Akshay',
          points: p,
          Region: 'Roorkee',
        };
        this.state.cleaners.push(akshay);
        this.state.cleaners.sort(function(a, b){
          if(a.points < b.points) return 1;
          if(a.points > b.points) return -1;
          return 0;
        })
        this.setState({
            ether: etherAva,
        });
        
    });
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