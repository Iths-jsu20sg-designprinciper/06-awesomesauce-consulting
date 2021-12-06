import { useState } from 'react';
import './App.css';
import Start from './components/start/Start'
import Vision from './components/vision/Vision'
import Contact from './components/contact/Contact'

function App() {
	const [view, setView] = useState<string>('start')
	const VIEW_START = 'start', VIEW_VISION = 'vision', VIEW_CONTACT = 'contact'

	let main = null;
	if( view === VIEW_START ) {
		main = <Start />
	}
	else if( view === VIEW_VISION ) {
		main = <Vision />
	}
	else if( view === VIEW_CONTACT ) {
		main = <Contact />
	}
	
	return (
		<div id="app">
			<header>
				<h1> Awesomesauce consulting </h1>
				<nav className="nav">
					<button data-test="start-button"
						onClick={() => setView(VIEW_START)}> Welcome </button>
					<button
						onClick={() => setView(VIEW_VISION)}
						data-test="vision-button"> Our vision </button>
					<button data-test="contact-button"
						onClick={() => setView(VIEW_CONTACT)}> Contact us </button>
				</nav>
			</header>
			<main>
				{main}
			</main>
			<footer> footer </footer>
		</div>
	);
}

export default App;
