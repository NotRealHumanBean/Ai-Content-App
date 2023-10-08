import React, { Component } from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

export default class footer extends Component {
	render() {
		return (
            <div className={styles.footer}>
                <div className={styles.nameData}>Artificium.app © 2023</div>
                <div className={styles.privacyPolicy}>
                <Link to='/'><span>Privacy Policy</span></Link>
                </div>
            </div>
		)
	}
}