import { TUrlObject } from '../../@types/index.ts';

export class HttpRequest {
	private base_url: string;
	private readonly GET_URL_ENDPOINT = '/';
	private readonly POST_URL_ENDPOINT = '/api/url';

	constructor(base_url: string) {
		this.base_url = base_url;
	}

	async get(short_url_id: string): Promise<TUrlObject | null> {
		try {
			const response = await fetch(
				`${this.base_url}${this.GET_URL_ENDPOINT}${short_url_id}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			return (await response.json()) as TUrlObject;
		} catch (error) {
			console.error('Error fetching URL:', error);
			return null;
		}
	}

	async post(url: string): Promise<TUrlObject | null> {
		try {
			const response = await fetch(`${this.base_url}${this.POST_URL_ENDPOINT}`, {
				method: 'POST',
				body: JSON.stringify({ url }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			return await response.json();
		} catch (error) {
			console.error('Error posting URL:', error);
			return null;
		}
	}
}
