import { render, screen } from '@testing-library/react';
import Vision from './Vision';


describe('Vision component', () => {
	it('contains positive words', () => {
		const positives = ['awesome', 'great']
		render(<Vision />)
		positives.forEach(word => {
			const element = screen.getByText(word, { exact: false })
			expect(element).toBeInTheDocument()
		})
	})
	it('does not contain negative words', () => {
		const negative = ['suck']
		render(<Vision />)
		negative.forEach(word => {
			expect( () => screen.getByText(word, { exact: false }) ).toThrow()
		})
	})
})