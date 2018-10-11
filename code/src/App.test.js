import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
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
	const wrapper = shallow(<OpeningHours hours={[]} />)
	expect(wrapper.find('.closed')).to.have.lengthOf(1)
})

//- A restaurant can be opened and closed multiple times during the same day,
// E.g. on Mondays from 9 AM - 11 AM and from 1 PM to 5 PM

/*	 A restaurant might not be closed during the same day 	E.g. a restaurant is
opened on a Friday evening and closed on small hours of Saturday. In that case
friday-object includes only the opening time. Closing time is part of the
saturday-object.  */

/* When printing opening hours which span between multiple
days, closing time is always a part of the day when a restaurant was opened
(e.g. Friday 8 PM - 1 AM)*/
