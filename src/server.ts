import express from 'express';
import routes from './routes';
import 'reflect-metadata';

import './databases';

const PORT = 3333;

const app = express();
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`⚡ Server started on port ${PORT}.`);
});
