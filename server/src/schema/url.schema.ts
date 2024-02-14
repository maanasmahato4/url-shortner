import zod, { object, string } from 'zod';

export const bodyValidationSchema = zod.object({
	body: object({
		url: string({
			required_error: 'url is required',
		}),
	}),
});
