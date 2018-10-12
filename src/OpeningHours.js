import React from 'react'
import PropTypes from 'prop-types'
import Hour from './Hour'

const OpeningHours = ({ hours, nextHours }) => {
	let isOpen = false
	let renderHours = []
	hours.forEach((item, i) => {
		if (item.type === 'open' || (item.type === 'close' && isOpen)) {
			renderHours.push(<Hour key={`hour${i}`} {...item} />)
		}
		isOpen = item.type === 'open'
	})

	if (isOpen) {
		renderHours.push(<Hour key="hour" {...nextHours[0]} />)
	}

	return (
		<span className="hours">
			{hours.length ? renderHours : <span className="closed">closed</span>}
		</span>
	)
}

OpeningHours.propTypes = {
	hours: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf(['open', 'close']),
			value: PropTypes.number,
		}),
	),
	nextHours: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf(['open', 'close']),
			value: PropTypes.number,
		}),
	),
}

export default OpeningHours
