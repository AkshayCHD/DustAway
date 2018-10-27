import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Nav from '../components/Nav';
import '../../App.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='background_result'>
        <Nav />
        <center>
          <Paper className="container">
            <Typography variant="display2" style={{ marginBottom: 20 }}>
              Login
            </Typography>
            <form id="login-form" onSubmit={this.handleSubmit} >
              <TextField
                error={this.state.error === 'User not found'}
                helperText={this.state.error === 'User not found' ? this.state.error : ''}
                id="login-email"
                label="Email"
                margin="normal"
                className="textField"
              />
              <TextField
                error={this.state.error === 'Incorrect password'}
                helperText={this.state.error === 'Incorrect password' ? this.state.error : ''}
                id="login-password"
                label="Password"
                margin="normal"
                type="password"
                className="textField"
              />
              <a href="." className="link">Forgot Password</a>
              <Button variant="contained" color="primary" type="submit" className="login_button">
                Login
              </Button>
              { 'Don\'t have an account? Sign up' } <Link to="/signup">here</Link>.
            </form>
          </Paper>
        </center>
      </div>
    );
  }
}
