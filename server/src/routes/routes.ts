import { Router, Request, Response } from 'express';
import { ValidateResource } from '../middlewares/resource-validator.middleware';
import { bodyValidationSchema } from '../schema/url.schema';

const router = Router();

router.post(
	'/url',
	ValidateResource(bodyValidationSchema),
	async (req: Request, res: Response): Promise<Response> => {
		try {
			return res.status(200);
		} catch (error) {
			return res.status(500).json({ error });
		}
	},
);

export default router;
