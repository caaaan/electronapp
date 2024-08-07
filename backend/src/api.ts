import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import taskRoutes from './routes/task';

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use('/api', taskRoutes);

app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});
