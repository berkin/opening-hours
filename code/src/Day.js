import React from 'react'

const weekdayName = new Date()
	.toLocaleDateString('en', { weekday: 'long' })
	.toLowerCase()

const Day = ({ day }) => {
	return (
		<span>
			{day} {weekdayName === day && <span>today</span>}
		</span>
	)
}

export default Day
