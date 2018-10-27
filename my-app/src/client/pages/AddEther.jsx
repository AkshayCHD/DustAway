import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withRouter } from 'react-router-dom';
import Nav from '../components/Nav';
import '../../App.css';
import GarbageContract from '../blockchain/build/contracts/GarbageContract.json';

import getWeb3 from '../utils/getWeb3';



let contractInstance = null;
const contract = require('truffle-contract');


function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class AddEther extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      rating: 0,
      web3: null,
      successful: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.getAmount = this.getAmount.bind(this);
    this.handleCloseUnsuccessful = this.handleCloseUnsuccessful.bind(this);
  }
  componentWillMount() {
    getWeb3.then((results) => {
      this.setState({
        web3: results.web3,
        metamask: true,
      });
      this.instantiateContract();
    }).catch(() => {
      this.setState({ metamask: false });
      console.log('Error finding web3. Please make sure MetaMask is installed.');
    });
  }

  instantiateContract() {
    const instance = this;
    this.state.web3.eth.getAccounts((error, result) => {
      if (error != null) {
        console.log('Could not get accounts');
      } else {
        [instance.state.web3.eth.defaultAccount] = result;
        const auctionContract = contract(GarbageContract);
        auctionContract.setProvider(instance.state.web3.currentProvider);
        auctionContract.deployed().then((cinstance) => {
          contractInstance = cinstance;
        });
      }
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({rating: e.target.value});
  };

  formSubmit = (e) => {
    e.preventDefault();
    console.log("entered form submit");
    let amount = parseInt(document.getElementById("amount").value);
    
    amount = amount.toString();
    const thisInstance = this;
    contractInstance.addEther(
      { from: thisInstance.state.web3.eth.defaultAccount, value: thisInstance.state.web3.utils.toWei(amount, 'ether') },
    ).then((res) => {
      console.log(res);
      if (res) {
        console.log("*****************************");
        console.log(res);

        thisInstance.setState({ successful: true });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  getAmount = (e) => {
    e.preventDefault();
    const thisInstance = this;
    contractInstance.getAmount.call(
      { from: thisInstance.state.web3.eth.defaultAccount },
    ).then((res) => {
      console.log(res);
      if (res) {
        console.log("*****************************");
        console.log(res);

        thisInstance.setState({ successful: true });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  handleCloseUnsuccessful() {
    this.setState({
      successful:false,
    });
  }

  render() {
    return (
      <div className="background_create">
        <Nav />
        <Card className="timeline_header">
              <CardContent className="flex_view">
                <Typography variant="display3" component="h2" className="timeline_text">
                  Add Amount
                </Typography>
              </CardContent>
            </Card>
        <center>
          <Paper className="container" elevation={4}>
            <Typography variant="headline" component="h3">
              Add Amount.
            </Typography>
            <Typography variant="body2" component="p">
              Disclaimer: These details can not be altered once they are set.
            </Typography>
            <form noValidate autoComplete="off" onSubmit={this.formSubmit}>
              <TextField
                required
                id="amount"
                label="Amount to added to contract"
                className="textField"
                margin="normal"
              />
              <center>
                <Button variant="contained" color="primary" type="submit" className="login_button" >
                  Submit
                </Button>
              </center>
            </form>
            <br />
            <br />
          </Paper>
        </center>
        <Dialog
          open={this.state.successful}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleCloseUnsuccessful}
          aria-labelledby="alert-dialog-unsuccessful-title"
          aria-describedby="alert-dialog-unsuccessful-description"
        >
          <DialogTitle id="alert-dialog-unsuccessful-title">
            {'Transaction Successful.'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-unsuccessfule-description">
              Amount was sucessfully transferred to Contract.
            </DialogContentText>
          </DialogContent>
        </Dialog>
        
      </div>
    );
  }
}


export default withRouter(AddEther);
