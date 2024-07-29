import express, { type Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { json, urlencoded } from 'body-parser';

import pollRoutes from './routes/poll';

export const createServer = (): Express => {
  const app = express();
  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get('/api', (_, res) => {
      return res.json({ status: 'OK' });
    });

  app.use('/api/poll', pollRoutes);

  return app;
};
