import express, { Request, Router } from 'express';
import optionRoutes from './option';
import { getAllPolls, getPollById } from '../lib';

type PollRequest = Request<{ id: string }>;

const router: Router = express.Router({ mergeParams: true });

router.get('/', (_, res) => {
  const data = getAllPolls();
  return res.json(data);
});

router.get('/:id', (req: PollRequest, res) => {
  const { id } = req.params;
  const data = getPollById(Number(id));
  if (!data) {
    return res.status(404).json({ message: 'Poll not found' });
  }
  return res.json(data);
});

router.use('/:id/option', optionRoutes);

export default router;
