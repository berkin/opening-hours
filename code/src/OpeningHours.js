import React from 'react'
import PropTypes from 'prop-types'
import Hour from './Hour'

const OpeningHours = ({ hours, nextHours }) => {
	let isOpen = false
	let renderHours = []
	hours.forEach(item => {
		if (item.type === 'open' || (item.type === 'close' && isOpen)) {
			renderHours.push(<Hour {...item} />)
		}
		isOpen = item.type === 'open'
	})

	if (isOpen) {
		renderHours.push(<Hour {...nextHours[0]} />)
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
