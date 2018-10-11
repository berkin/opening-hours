import React from 'react'
import OpeningHours from './OpeningHours'
import Day from './Day'
import data from './data.json'

const days = Object.keys(data)

const App = () => (
	<ul>
		{days.map((day, i) => (
			<li key={day}>
				<Day day={day} />
				<OpeningHours
					day={day}
					hours={data[day]}
					nextHours={data[days[i + 1]]}
				/>
			</li>
		))}
	</ul>
)

export default App
