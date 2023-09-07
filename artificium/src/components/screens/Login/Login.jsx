import Logo from '../../../assets/img/logo.svg'
import {Link} from 'react-router-dom'
import styles from './Login.module.scss'
const Login = () => {
	return (
		<div>
			<div>
				<img src={Logo} className={styles.logo}/>
				<div>
					<h2>Let's get creative!</h2>
					<p>Log in to Artificium to start creating magic.</p>
				</div>
				<div>
					<input type='email' name='Email' placeholder='Email'></input>
					<input type='password' name='Password' placeholder='Password'></input>
				</div>
				<div>
					<div>
						<input type='checkbox' name='remember' />
						<label for='remember'>Remember me</label>
					</div>
					<p>Forgot password?</p>
				</div>
				<button>Login</button>
				<div>
					<hr />
					<p>or continue with</p>
					<hr />
				</div>
				<div>
					<button>Google Account</button>
					<button>Apple Account</button>
				</div>
				<div>
					<p>Don’t have an account?</p>
					<Link to='/signUp'>Sign Up</Link>
				</div>
			</div>
		</div>
	)
}

export default Login
