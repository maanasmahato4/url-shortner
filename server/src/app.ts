import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connection } from './database/database';
import routes from './routes/routes';

config();
const app = express();

// middlewares

app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:5173'],
	}),
);

app.use(express.json());

// running the server
app.listen(3000, () => {
	console.log(`server running at http://localhost:${3000}`);
	connection();
	app.use('/api', routes);
});
