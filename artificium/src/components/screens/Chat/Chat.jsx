import React, { Component } from 'react'
import styles from './Chat.module.scss'
import avatar from '../../../assets/img/avatar.png'
import avatarUser from '../../../assets/img/person-ryan-lee.png'
import search from '../../../assets/img/icons/search.svg'
import billing from '../../../assets/img/icons/credit-card.svg'
import triangle from '../../../assets/img/icons/triangle.svg'
import octagon from '../../../assets/img/icons/octagon.svg'
import square from '../../../assets/img/icons/square.svg'
import cog from '../../../assets/img/icons/cog.png'
export default class Chat extends Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.sidebar}>
					<div className={styles.nav}>
						<div className={styles.workSpace}>
							<img src={avatar} alt='' className={styles.userAvatar} />
							<div className={styles.text}>
								<p className={styles.userName}>Intellisys</p>
								<p className={styles.amountSub}>12 member</p>
							</div>
						</div>
						<input className={styles.dropDown} type='checkbox'></input>

						<div className={styles.general}>
							<h2>GENERAL</h2>
							<div>
								<img src={search} alt='' className={styles.icons} />
								<a>Search</a>
							</div>
							<div>
								<img src={billing} alt='' className={styles.icons} />
								<a>Biling</a>
							</div>
						</div>
						<div className={styles.projects}>
							<h2>PROJECTS</h2>
							<div>
								<img src={square} />
								<a>Orbital Oddysey</a>
							</div>
							<div>
								<img src={triangle} />
								<a>Digital Product Launch</a>
							</div>
							<div>
								<img src={square} />
								<a>Brand Refresh</a>
							</div>
							<div>
								<img src={octagon} />
								<a>Social Media Strategy</a>
							</div>
						</div>
					</div>
					<div className={styles.user}>
						<div>
							<img src={avatarUser} />
							<div>
								<p>Ryan Lee<br/>
								<span className={styles.amountSub}>Premium</span></p>
							</div>
						</div>
						<button>
							<img src={cog} />
						</button>	
					</div>
				</div>
				<div className={styles.topBar}>topBar</div>
				<div className={styles.content}>content</div>
				<div className={styles.member}>member</div>
			</div>
		)
	}
}
