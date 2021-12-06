import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';
import Start from './components/start/Start'

describe('App component', () => {
	it('renders without errors', () => {
		render(<App />);
	});
})

describe('App component (integration)', () => {
	it('renders Start initially', () => {
		const wrapper = mount(<App />)
		const actual = wrapper.contains(<Start/>)
		expect(actual).toBe(true)
	})
})