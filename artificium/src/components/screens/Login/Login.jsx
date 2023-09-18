import Logo from '../../../assets/img/logo.svg'
import Email from '../../../assets/img/icons/email.svg'
import Lock from '../../../assets/img/icons/lock.svg'
import Apple from '../../../assets/img/icons/frame.svg'
import Google from '../../../assets/img/icons/frame 1.svg'
import Illustration from '../../../assets/img/illustration.svg'
import { Link } from 'react-router-dom'
import styles from './Login.module.scss'
const Login = () => {
	return (
		<div className={styles.container}>
			<div>
				<img src={Logo} className={styles.logo} />
				<div className={styles.wrapper}>
					<div className={styles.header}>
						<h2>Let's get creative!</h2>
						<p>Log in to Artificium to start creating magic.</p>
					</div>
					<div className={styles.inputBox}>
						<input type='email' name='Email' placeholder='Email' />
						<img src={Email} />
					</div>
					<div className={styles.inputBox}>
						<input type='password' name='Password' placeholder='Password' />
						<img src={Lock} />
					</div>
					<div className={styles.checkBox}>
						<div>
							<input type='checkbox' name='remember' />
							<label for='remember'>Remember me</label>
						</div>
						<p>Forgot password?</p>
					</div>
					<button className={styles.loginBtn}>Login</button>
					<div className={styles.cnt}>
						<hr />
						<p>or continue with</p>
					</div>
					<div className={styles.reg}>
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
				<div className={styles.signUp}>
					<p>Don’t have an account?</p>
					<Link to='/signUp'>Sign Up</Link>
				</div>
			</div>
			<div className={styles.ImgContainer}></div>
		</div>
	)
}

export default Login
