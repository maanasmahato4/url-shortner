import { AnyZodObject, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const ValidateResource =
	(schema: AnyZodObject) =>
	async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void | Response> => {
		try {
			await schema.parseAsync(req);
			next();
		} catch (error) {
			if (error instanceof ZodError) {
				return handleValidationError(res, error);
			} else {
				return handleUnexpectedError(res, error as Error);
			}
		}
	};

const handleValidationError = (res: Response, error: ZodError): Response => {
	return res.status(400).json({ error: error.errors });
};

const handleUnexpectedError = (res: Response, error: Error): Response => {
	return res.status(500).json({ error: error.message });
};
