import { createServer } from './server';

const PORT = process.env.PORT || 3002;

const server = createServer();

server.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
