import express from 'express';
import cors from 'cors';
import router from './src/routes';
import morgan from 'morgan';
import errorHandler from './src/middleware/errorHandler';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(router);
app.use(errorHandler);

app.listen(port, () => process.env.NODE_ENV === 'development'
  ? console.log(`Server on http://localhost:${port}`)
  : null
);

export default app;
