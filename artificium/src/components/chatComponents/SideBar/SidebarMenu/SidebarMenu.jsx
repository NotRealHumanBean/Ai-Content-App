import { projectList, menuList } from './SidebarList.jsx'
import styles from './sidebar.module.scss'
import React, { useState } from 'react'

export default function SidebarMenu() {
	const [activeState, setActiveState] = useState(false)

	const handelClick = () => {
		setActiveState(prev => !prev)
	}

	return (
		<div>
			<div className={styles.accordion}>
				<h2 onClick={handelClick}>GENERAL</h2>
				<ul
					className={`${styles.accordion__collapse}${
						activeState ? 'open' : ''
					}`}
				>
					{menuList.map((listItem, id) => {
						return (
							<li key={id} className={styles.accordion__item}>
								<img src={listItem.icon} />
								<div>{listItem.name}</div>
							</li>
						)
					})}
				</ul>
				<h2>PROJECTS</h2>
				<ul
					className={styles.accordion__collapse.open}
				>
					{projectList.map((listItem, id) => {
						return (
							<li key={id} className={styles.accordion__item}>
								<img src={listItem.icon} />
								<div>{listItem.name}</div>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
