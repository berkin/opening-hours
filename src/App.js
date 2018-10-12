import React from 'react'
import OpeningHours from './OpeningHours'
import Day from './Day'
import './App.css'
import data from './data.json'

const days = Object.keys(data)

const App = () => (
	<div className="box">
		<h1 className="title">
			<span className="clock" />
			Opening hours
		</h1>
		<ul className="list">
			{days.map((day, i) => (
				<li className="list-item" key={day}>
					<Day day={day} />
					<OpeningHours
						day={day}
						hours={data[day]}
						nextHours={data[days[i + 1]]}
					/>
				</li>
			))}
		</ul>
	</div>
)

export default App
