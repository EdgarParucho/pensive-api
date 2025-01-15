import express from 'express';
import cors from 'cors';
import router from './routes';
import sequelize from './database/sequelize';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(morgan('dev'));

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});

export default app;
