import express, { Request } from 'express';
import * as mockData from '../../mock-data.json';

type OptionRequest = Request<{ id: string; optionId: string }>;

const router = express.Router({ mergeParams: true });

router.get('/', (req: OptionRequest, res) => {
  const { id } = req.params;
  const poll = mockData.polls.find((poll) => poll.id === Number(id));
  if (!poll) {
    return res.status(404).json({ message: 'Poll not found' });
  }
  return res.json({ pollId: poll.id, options: poll.options });
});

router.get('/:optionId', (req: OptionRequest, res) => {
  const { id, optionId } = req.params;
  const poll = mockData.polls.find((poll) => poll.id === Number(id));
  if (!poll) {
    return res.status(404).json({ message: 'Poll not found' });
  }
  const option = poll.options.find(
    (option) => option.optionId === Number(optionId),
  );
  if (!option) {
    return res.status(404).json({ message: 'Option not found' });
  }
  return res.json(option);
});

export default router;
