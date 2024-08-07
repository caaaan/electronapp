import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import taskRoutes from './routes/task';
import cors from 'cors';


const app = express();
const port = 8000;

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};


app.use(cors(corsOptions));

app.use('/api', taskRoutes);

app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});
