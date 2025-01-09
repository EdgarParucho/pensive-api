import express, { Request, Response } from 'express';
import cors from 'cors';
import useDevDependencies from './utils/useDevDependencies';
import router from './routes';

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') useDevDependencies(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log('Server Up'));

export default app;
