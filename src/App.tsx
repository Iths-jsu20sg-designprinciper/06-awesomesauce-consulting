import React from 'react';
import './App.css';
import Start from './components/start/Start'

function App() {
	return (
		<div id="app">
			<header>
				<h1> Awesomesauce consulting </h1>
				<nav className="nav">
					<button> Welcome </button>
					<button> Our vision </button>
					<button> Contact us </button>
				</nav>
			</header>
			<main>
				<Start />
			</main>
			<footer> footer </footer>
		</div>
	);
}

export default App;
