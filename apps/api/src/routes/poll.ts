import express, { Request } from 'express';
import optionRoutes from './option';
import * as mockData from '../mock-data.json';

type PollRequest = Request<{ id: string }>;

const router = express.Router({ mergeParams: true });

router.get('/', (_, res) => {
  const data = mockData.polls;
  return res.json(data);
});

router.get('/:id', (req: PollRequest, res) => {
  const { id } = req.params;
  const data = mockData.polls.find((poll) => poll.id === Number(id));
  if (!data) {
    return res.status(404).json({ message: 'Poll not found' });
  }
  return res.json(data);
});

router.use('/:id/option', optionRoutes);

export default router;
