import { serve } from '@hono/node-server';
import { swaggerUI } from '@hono/swagger-ui';
import { OpenAPIHono } from '@hono/zod-openapi';
import { Hono } from 'hono';

const app = new OpenAPIHono();

app.doc('/docs', {
  openapi: '3.0.0',
  info: {
    title: 'Polling App API',
    version: '1.0.0',
  },
});

app.get('/ui', swaggerUI({ url: '/docs' }));

const api = new Hono().basePath('/api');

api.get('/poll', (c) => {
  return c.json({ message: 'GET all polls' });
});

api.get('/poll/:pollId', (c) => {
  return c.json({ message: `GET poll by ID ${c.req.param('pollId')}` });
});

api.get('/poll/:pollId/option', (c) => {
  return c.json({ message: `GET poll options by ID ${c.req.param('pollId')}` });
});

api.get('/poll/:pollId/option/:optionId', (c) => {
  return c.json({
    message: `GET poll option by ID ${c.req.param('optionId')} for poll ${c.req.param('pollId')}`,
  });
});

app.route('/', api);

const port = 3002;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
