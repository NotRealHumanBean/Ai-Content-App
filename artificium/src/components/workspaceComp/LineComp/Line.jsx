import React, { Component } from 'react'
import styles from './line.module.scss'


export default class Line extends Component {
	render() {
		return (
            <div className= {styles.cnt}>
                <span></span>
                <p>or continue with</p>
                <span></span>
            </div>
		)
	}
}