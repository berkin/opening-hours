import React from 'react'
import PropTypes from 'prop-types'

const Hour = ({ type, value }) => {
	const hour = value / (60 * 60)
	let hourText = ''
	if (hour > 12) {
		hourText = hour - 12 + 'PM'
	} else {
		hourText = hour + 'AM'
	}

	return <span>{hourText} </span>
}

Hour.propTypes = {
	type: PropTypes.oneOf(['open', 'close']),
	value: PropTypes.number,
}

export default Hour
