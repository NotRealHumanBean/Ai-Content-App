import Logo from '../../../assets/img/logo.svg'
import Email from '../../../assets/img/icons/email.svg'
import Lock from '../../../assets/img/icons/lock.svg'
import Apple from '../../../assets/img/icons/frame.svg'
import Google from '../../../assets/img/icons/frame 1.svg'
import { Link } from 'react-router-dom'
const Login = () => {
	return (
		<div className='container'>
			<div className="formContainer">
				<div className="logoContainer">
					<img src={Logo} className='logo' />
				</div>
				
				<div className="wrapper">
					<div className='header'>
						<h2 className="headerTitle">Let's get <span>creative!</span></h2>
						<p>Log in to Artificium to start creating magic.</p>
					</div>
					<div className='inputBox'>
						<input type='email' name='Email' placeholder='Email' />
						<img src={Email} />
					</div>
					<div className='inputBox'>
						<input type='password' name='Password' placeholder='Password' />
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
					<div className='cnt'>
						<span></span>
						<p>or continue with</p>
						<span></span>
					</div>
					<div className='reg'>
						<div className="reg-item">
							<img src={Google} />
							<button>Google Account</button>
						</div>
						<div className="reg-item">
							<img src={Apple} />
							<button>Apple Account</button>
						</div>
					</div>
				</div>
				<div className='signUp'>
					<p>Don’t have an account?</p>
					<Link to='/signUp'><span>Sign Up</span></Link>
				</div>
			</div>
			<div className='ImgContainer'></div>
		</div>
	)
}

export default Login
