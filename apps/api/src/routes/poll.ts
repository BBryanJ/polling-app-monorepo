import express from 'express';
import * as mockData from '../mock-data.json';

const router = express.Router();

router.get('/', (_, res) => {
  const data = mockData.polls;
  return res.json(data);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const data = mockData.polls.find((poll) => poll.id === Number(id));
  if (!data) {
    return res.status(404).json({ message: 'Poll not found' });
  }
  return res.json(data);
});

export default router;
