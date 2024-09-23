import { serve } from '@hono/node-server';
import { swaggerUI } from '@hono/swagger-ui';
import { OpenAPIHono } from '@hono/zod-openapi';
import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new OpenAPIHono();

app.doc('/docs', {
  openapi: '3.0.0',
  info: {
    title: 'Polling App API',
    version: '1.0.0',
  },
});

app.get('/ui', swaggerUI({ url: '/docs' }));

app.use(logger());

const api = new Hono().basePath('/api');

api.get('/poll', (c) => {
  return c.json({ message: 'GET all polls' });
});

api.get('/poll/:pollId', (c) => {
  return c.json({ message: `GET poll by ID ${c.req.param('pollId')}` });
});

api.post('/poll', (c) => {
  return c.json({ message: 'POST new poll' });
});

api.put('/poll/:pollId', (c) => {
  return c.json({ message: `PUT poll by ID ${c.req.param('pollId')}` });
});

api.delete('/poll/:pollId', (c) => {
  return c.json({ message: `DELETE poll by ID ${c.req.param('pollId')}` });
});

api.get('/poll/:pollId/option', (c) => {
  return c.json({ message: `GET poll options by ID ${c.req.param('pollId')}` });
});

api.get('/poll/:pollId/option/:optionId', (c) => {
  return c.json({
    message: `GET poll option by ID ${c.req.param('optionId')} for poll ${c.req.param('pollId')}`,
  });
});

api.post('/poll/:pollId/option', (c) => {
  return c.json({
    message: `POST new poll option for poll ${c.req.param('pollId')}`,
  });
});

api.put('/poll/:pollId/option/:optionId', (c) => {
  return c.json({
    message: `PUT poll option by ID ${c.req.param('optionId')} for poll ${c.req.param('pollId')}`,
  });
});

api.delete('/poll/:pollId/option/:optionId', (c) => {
  return c.json({
    message: `DELETE poll option by ID ${c.req.param('optionId')} for poll ${c.req.param('pollId')}`,
  });
});

app.route('/', api);

const port = 3002;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
