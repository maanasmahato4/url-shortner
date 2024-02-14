import { Router, Request, Response } from 'express';
import { ValidateResource } from '../middlewares/resource-validator.middleware';
import { bodyValidationSchema } from '../schema/url.schema';
import urlModel from '../models/shortened_url.model';

const router = Router();

router.get(
	'/:short_url',
	async (req: Request, res: Response): Promise<Response | void> => {
		try {
			const short_url = req.params.short_url;
			const url = await urlModel.findOne({ where: { short: short_url } });

			if (!url) {
				return res.status(404).json({ message: 'Short URL not found.' });
			}
			res.redirect(url.full);
		} catch (error) {
			return res.status(500).json({ message: 'An error occurred.', error: error });
		}
	},
);

router.post(
	'/url',
	ValidateResource(bodyValidationSchema),
	async (req: Request, res: Response): Promise<Response> => {
		try {
			const { url } = req.body;
			const savedNewUrl = await urlModel.create({ full: url });
			return res.status(200).json({
				id: savedNewUrl.id,
				full: savedNewUrl.full,
				short: `http://localhost:3000/api/${savedNewUrl.short}`,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({ error });
		}
	},
);

export default router;
