import { render, screen } from '@testing-library/react';
import Start from './Start';


describe('Start component', () => {
	it('renders without errors', () => {
		render(<Start />)
	})

	it('renders the text "Welcome"', () => {
		// black box test - utgår inte från någon kunskap om innehållet i komponenten
		render(<Start />)
		const welcomeElement = screen.getByText(/Welcome/i)
		expect(welcomeElement).toBeInTheDocument()
	})
})

// it('renders without errors', () => {
// 	render(<App />);
//   //   const linkElement = screen.getByText(/learn react/i);
//   //   expect(linkElement).toBeInTheDocument();
//   });