const express = require('express')
const cors = require('cors')
const router = require('./src/routes')
const morgan = require('morgan')
const errorHandler = require('./src/middleware/errorHandler')

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

module.exports = app;
