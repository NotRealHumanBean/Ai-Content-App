import React, { Component } from 'react'
import styles from './Chat.module.scss'
import SideBar from '../../components/chatComponents/SideBar/SideBar'
export default class Chat extends Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.sidebar}>
					<SideBar />
				</div>
				<div className={styles.topBar}>topBar</div>
				<div className={styles.content}>content</div>
				<div className={styles.member}>member</div>
			</div>
		)
	}
}
