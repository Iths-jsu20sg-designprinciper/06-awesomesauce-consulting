import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';
import Start from './components/start/Start'
import Vision from './components/vision/Vision'
import Contact from './components/contact/Contact'

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

	it('renders Vision component after menu click', () => {
		const wrapper = mount(<App />)
		const btn = wrapper.find('[data-test="vision-button"]')

		btn.simulate('click')

		expect( wrapper.contains(<Vision />) ).toBe(true)
	})
	it('renders Contact component after menu click', () => {
		const wrapper = mount(<App />)
		const btn = wrapper.find('[data-test="contact-button"]')

		btn.simulate('click')

		expect( wrapper.contains(<Contact />) ).toBe(true)
	})
	it('renders Start component after several clicks', () => {
		const wrapper = mount(<App />)
		const contactBtn = wrapper.find('[data-test="contact-button"]')
		const startBtn = wrapper.find('[data-test="start-button"]')

		contactBtn.simulate('click')
		startBtn.simulate('click')

		expect( wrapper.contains(<Start />) ).toBe(true)
	})
})