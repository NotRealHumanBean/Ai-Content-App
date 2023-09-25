import Logo from '../../../assets/img/logo.svg'
import Email from '../../../assets/img/icons/email.svg'
import Lock from '../../../assets/img/icons/lock.svg'
import Apple from '../../../assets/img/icons/frame.svg'
import Google from '../../../assets/img/icons/frame 1.svg'
import { Link } from 'react-router-dom'
const SignUp = () => {
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
					<div className='inputBox signUp-inputBox'>
						<input type='email' name='Email' placeholder='Email' />
						<img src={Email} />
					</div>
					<div className='inputBox'>
						<input type='password' name='Password' placeholder='Password' />
						<img src={Lock} />
					</div>
					<div className='inputBox'>
						<input type='password' name='Password' placeholder='Repeate password' required/>
						<img src={Lock} />
					</div>
					<div className='checkBox'>
						<div className="checkBoxField">
							<input type='checkbox' id='remember' name="remember" className="check-box"/>
							<label for='remember'>Remember me</label>
						</div>
						<Link to='/forgotPassword'><span className="forgotten-psw">Forgot Password?</span></Link>
					</div>
					<button className='loginBtn'>Log in</button>

					
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

export default SignUp;
