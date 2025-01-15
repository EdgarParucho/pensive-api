import express from 'express';
import cors from 'cors';
import useDevDependencies from './utils/useDevDependencies';
import router from './routes';
import sequelize from './database/sequelize';

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV == 'development') useDevDependencies(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});

export default app;
