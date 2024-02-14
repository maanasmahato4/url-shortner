import './form.style.css';
import React, { FormEvent, ReactElement } from 'react';
import { HttpRequest } from '../../lib/http/http-request.ts';
import { TUrlObject } from '../../@types/index.ts';

type UrlFormProps = {
	setUrls: React.Dispatch<React.SetStateAction<TUrlObject[]>>;
};

const UrlForm: React.FC<UrlFormProps> = ({ setUrls }): ReactElement => {
	const http = new HttpRequest('http://localhost:3000');
	const [url, setUrl] = React.useState('');

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await http
			.post(url)
			.then((response: TUrlObject | null) => {
				if (response) {
					setUrls((prevUrls) => [...prevUrls, response]);
					console.log(response);
				}
			})
			.catch((error) => console.log(error));
	};
	return (
		<form className="container" onSubmit={handleSubmit}>
			<label>Source Url</label>
			<input type="text" onChange={(e) => setUrl(e.target.value)} />
			<button type="submit">Submit</button>
		</form>
	);
};

export default UrlForm;
