import styles from './sidebar.module.scss'
import cog from '../../../assets/img/icons/cog.png'
import avatarUser from '../../../assets/img/person-ryan-lee.png'
import avatar from '../../../assets/img/avatar.png'
import SidebarMenu from './SidebarMenu/SidebarMenu'
import React from 'react'

function sideBar() {
	return (
		<div>
			<div className={styles.nav}>
				<div className={styles.workSpace}>
					<img src={avatar} alt='' className={styles.userAvatar} />
					<div className={styles.text}>
						<p className={styles.userName}>Intellisys</p>
						<p className={styles.amountSub}>12 member</p>
					</div>
				</div>
				<button
					className={styles.dropDown}
					type='checkbox'
				/>
			</div>
			<SidebarMenu />
			<div className={styles.user}>
				<div>
					<img src={avatarUser} />
					<div>
						<p>
							Ryan Lee
							<br />
							<span className={styles.amountSub}>Premium</span>
						</p>
					</div>
				</div>
				<button>
					<img src={cog} />
				</button>
			</div>
		</div>
	)
}

export default sideBar
