import React from 'react'
import styles from './chat.module.scss'
function Chat() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>sidebar</div>
			<div className={styles.topBar}>topBar</div>
			<div className={styles.content}>content</div>
			<div className={styles.member}>member</div>
		</div>
	)
}

export default Chat