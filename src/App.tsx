import { useState } from 'react';
import './App.css';
import Start from './components/start/Start'
import Vision from './components/vision/Vision'

function App() {
	const [view, setView] = useState<string>('start')
	const VIEW_START = 'start', VIEW_VISION = 'vision'

	let main = null;
	if( view === VIEW_START ) {
		main = <Start />
	}
	else if( view === VIEW_VISION ) {
		main = <Vision />
	}
	
	return (
		<div id="app">
			<header>
				<h1> Awesomesauce consulting </h1>
				<nav className="nav">
					<button> Welcome </button>
					<button
						onClick={() => setView(VIEW_VISION)}
						data-test="vision-button"> Our vision </button>
					<button> Contact us </button>
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
