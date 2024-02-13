import zod, { object, string } from 'zod';

const URL_REGEX = new RegExp(
	'(https://www.|http://www.|https://|http://)?[a-zA-Z0-9]{2,}(.[a-zA-Z0-9]{2,})(.[a-zA-Z0-9]{2,})?',
);

export const bodyValidationSchema = zod.object({
	body: object({
		url: string({
			required_error: 'url is required',
		}).regex(URL_REGEX, 'not a valid url'),
	}),
});
