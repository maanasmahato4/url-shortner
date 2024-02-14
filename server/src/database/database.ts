import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
	'url_shortener',
	'postgres',
	'maanas123',
	{
		host: 'localhost',
		dialect: 'postgres',
		port: 5432,
	},
);

export async function connection(): Promise<void> {
	await sequelize
		.authenticate()
		.then(() => console.log('database connected'))
		.catch((error: Error) => {
			console.error(error);
			process.exit(1);
		});
}
