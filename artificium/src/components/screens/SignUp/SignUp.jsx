import Logo from '../../../assets/img/logo.svg'
import Email from '../../../assets/img/icons/email.svg'
import Lock from '../../../assets/img/icons/lock.svg'
import Apple from '../../../assets/img/icons/frame.svg'
import Google from '../../../assets/img/icons/frame 1.svg'
import { Link } from 'react-router-dom'
import React, { Component } from "react";

//const SignUp = () => {
export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  email: "",
		  password: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	  handleSubmit(e) {
		e.preventDefault();
		const { email, password } = this.state;
		console.log(email, password);
	  }
	  render() {
		return (
			<div className='container'>
				<div className="formContainer">
					<div className="logoContainer">
						<img src={Logo} className='logo' />
					</div>
					
					<div className="wrapper">
						<div className='header'>
							<h2 className="headerTitle">Hello, <span>dear friend!</span></h2>
							<p>Log in to Artificium to start creating magic.</p>
						</div>
						<div className='reg signUp-reg'>
							<div className="reg-item">
								<img src={Google} />
								<button className="google-item">Sign in with Google</button>
							</div>
							<div className="reg-item">
								<img src={Apple} />
								<button>Sign in with Apple</button>
							</div>
						</div>
						<div className='cnt signUp-cnt'>
							<span></span>
							<p>or continue with</p>
							<span></span>
						</div>
						<form onSubmit={this.handleSubmit} className="signUp-form">
							<div className='inputBox signUp-inputBox'>
								<input type='email' name='Email' placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })} required/>
								<img src={Email} />
							</div>
							<div className='inputBox'>
								<input type='password' name='Password' placeholder='Password' onChange={(e) => this.setState({ password: e.target.value })} required/>
								<img src={Lock} />
							</div>
							<div className='inputBox'>
								<input type='password' name='Password' placeholder='Repeate password' required/>
								<img src={Lock} />
							</div>
							<button type="submit" className='loginBtn loginBtn-signUp'>Log in</button>
						</form>
					</div>
					<div className='signUp signUp-centered'>
						<p>Already have an account?</p>
						<Link to='/'><span>Log in</span></Link>
					</div>
				</div>
				<div className='ImgContainer ImgContainer-signup'>
					<div className="image-content">
						<div className="image-text">
							<p className="image-phrase">Artificium has been a game-changer for our content creation process.</p>
							<p className="image-phrase">The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.</p>
						</div>
						<div className="image-author">
							<span className="author">Lily Patel</span>
							<span className="place">CMO at Software House</span>
						</div>
					</div>
				</div>
			</div>
		)
	  }

}
