import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import OpeningHours from './OpeningHours'
Enzyme.configure({ adapter: new Adapter() })
it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<App />, div)
	ReactDOM.unmountComponentAtNode(div)
})

//If a restaurant is closed the whole day, an array of opening hours is empty.
// “tuesday”: [] means a restaurant is closed on Tuesdays
it('should render closed for empty arrays', () => {
	const wrapper = mount(<OpeningHours hours={[]} />)

	expect(wrapper.find('.closed')).toIncludeText('closed')
})

//- A restaurant can be opened and closed multiple times during the same day,
// E.g. on Mondays from 9 AM - 11 AM and from 1 PM to 5 PM
it('should render multiple opened and closed times', () => {
	const hours = [
		{ type: 'open', value: 1 },
		{ type: 'close', value: 2 },
		{ type: 'open', value: 3 },
		{ type: 'close', value: 4 },
	]
	const wrapper = mount(<OpeningHours hours={hours} />)

	expect(wrapper).toContainMatchingElements(4, '.hour-container')
})

/*	 A restaurant might not be closed during the same day 	E.g. a restaurant is
opened on a Friday evening and closed on small hours of Saturday. In that case
friday-object includes only the opening time. Closing time is part of the
saturday-object.  */
it('should render closed time', () => {
	const hours = [{ type: 'open', value: 1 }]
	const nextHours = [{ type: 'open', value: 2 }]
	const wrapper = mount(<OpeningHours hours={hours} nextHours={nextHours} />)

	expect(wrapper).toContainMatchingElements(2, '.hour-container')
})
