import './app.style.css';
import Table from './components/table/Table.tsx';
import UrlForm from './components/form/Form.tsx';
import { useState } from 'react';
import { TUrlObject } from './@types/index.ts';

function App() {
	const [urls, setUrls] = useState<TUrlObject[]>([]);
	return (
		<main>
			<header>
				<h1>Url Shortener</h1>
			</header>
			<div className="main-container">
				<UrlForm setUrls={setUrls} />
				<Table urls={urls} />
			</div>
		</main>
	);
}

export default App;
