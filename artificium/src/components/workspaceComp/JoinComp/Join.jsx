import React, { Component } from 'react'
import styles from './Join.module.scss'
import { Link } from 'react-router-dom'

export default class Join extends Component {
	render() {
		return (
            <div className={styles.joinWrapper}>
                <h1 className={styles.joinHeader}>
                    Join or Create a Workspace
                </h1>
                <p className={styles.joinText}>
                    Connect with others by joining an existing workspace or create a new one to  collaborate with your team.
                </p>
                <form action="#" className={styles.joinForm}>
                    <div className={styles.joinBlock}>
                        <input type="url" id="joinUrl" name="joinUrl" placeholder='Your workspace URL'/>
                    </div>
                </form>
            </div>
		)
	}
}