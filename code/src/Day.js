import React from 'react'
import PropTypes from 'prop-types'

const weekdayName = new Date()
	.toLocaleDateString('en', { weekday: 'long' })
	.toLowerCase()

const Day = ({ day }) => {
	return (
		<>
			<span className="dayname">{day}</span>
			{weekdayName === day && <span className="today">today</span>}
		</>
	)
}

Day.propTypes = {
	day: PropTypes.oneOf([
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
		'sunday',
	]),
}

export default Day
