import React from 'react'
import { connect } from 'react-redux'

export const member = (props) => {
	return (
		<div>member</div>
	)
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(member)