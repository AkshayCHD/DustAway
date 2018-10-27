import React, { Component } from 'react';
import Nav from '../components/Nav';
import '../../css/footer-distributed-with-address-and-phones.css';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';
import logo1 from '../../images/bd.png';
import carousel from '../../images/carousel.jpg';
import Paper from '@material-ui/core/Paper';
import '../../App.css';
import Vertical from '../components/stepper';
import loader from '../../images/loader.gif';
import facebook from '../../images/facebook.png'
import google from '../../images/google-plus.png'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png';
import {withRouter} from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
      super(props);
      this.getStarted = this.getStarted.bind(this);
    }

    state = {loading: true}

    componentDidMount(){
        setTimeout(() => this.setState({ loading: false }), 1500);
    }  
    getStarted() {
        console.log("something");
        this.props.history.push('/login');
    }

    render() {
        const preloader = (<div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={loader} alt="loader" /></div>)

        let content;

        if (this.state.loading) {
            content = preloader;
        } else {
            content = (
                <div className="center">
            <Nav />
            <img className="carousel" src={carousel} width="100%" height="100%"/>
            <br />
            <div className="row indexlogo">
                <div className="logo_index">
                    <img src={logo} />
                </div>
            </div>
            <div className = "indexcontent">
                    
                    <p>Block Dust is just not an ordinary smart city project, it uses technical knowledge and social
                        services aspect. It uses the blockchain technolgy to encrypt your information in more secured
                        manner, so your money won't go to wrong hand. Along with the social concept you can make money 
                        through it.
                        You don't beleive me, just sign up and get your money by making environment more greener and
                        your city less polluted. 
                    </p>
                    <Button variant="contained" color="primary" onClick={this.getStarted} className="signup_button" style={{width: '500px'}}>
                        Get Started
                    </Button>
                    
            </div>
                
            <footer className="footer-distributed">

			<div className="footer-left">

				<img src={logo1} />

				<p style={{fontSize:'30px', color: 'white'}}>Block Dust</p>

				<p className="footer-company-name">Block Dust &copy; 2018</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>UIET</span>Panjab University, CHD</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+919871166953</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@blockdust.com">support@blockdust.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About Block Dust</span>
					Block Dust is a revolutionary idea that will change the future and help in making our city clean in more playful approach.
				</p>

				<div className="footer-icons">

					<a href="#"><img src={facebook} /></a>
					<a href="#"><img src={google} /></a>
					<a href="#"><img src={instagram} /></a>
					<a href="#"><img src={linkedin} /></a>

				</div>

			</div>

		</footer>
        </div>
            )
        }

        return content;
    }
}

export default withRouter(HomePage);