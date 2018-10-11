import React from 'react'
import ReactDOM from 'react-dom'
import data from './data.json'
import App from './App'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<App />, div)
	ReactDOM.unmountComponentAtNode(div)
})
