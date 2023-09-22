import Logo from '../../../assets/img/logo.svg'
import Email from '../../../assets/img/icons/email.svg'
import Lock from '../../../assets/img/icons/lock.svg'
import Apple from '../../../assets/img/icons/frame.svg'
import Google from '../../../assets/img/icons/frame 1.svg'
import { Link } from 'react-router-dom'
const Login = () => {
	return (
		<div className='container'>
			<div>
				<img src={Logo} className='logo' />
				<div className="wrapper">
					<div className='header'>
						<h2>Let's get <span>creative!</span></h2>
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
						<div>
							<input type='checkbox' name='remember' />
							<label for='remember'>Remember me</label>
						</div>
						<Link to='/forgotPassword'><span>Forgot password?</span></Link>
					</div>
					<button className='loginBtn'>Login</button>
					<div className='cnt'>
						<hr />
						<p>or continue with</p>
					</div>
					<div className='reg'>
						<div>
							<img src={Google} />
							<button>Google Account</button>
						</div>
						<div>
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
