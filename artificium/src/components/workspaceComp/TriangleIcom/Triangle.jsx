import React, { Component } from 'react'
import Logo from '../../../assets/img/logo.svg'
import styles from './Triangle.module.scss'

export default class Triangle extends Component {
	render() {
		return (
            <div className={styles.logoContainer}>
                <img src={Logo} className={styles.logo} />
            </div>
		)
	}
}