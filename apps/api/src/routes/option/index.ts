import express, { Request } from 'express';
import { getPollOptionById, getPollOptions } from '../../lib';

type OptionRequest = Request<{ id: string; optionId: string }>;

const router = express.Router({ mergeParams: true });

router.get('/', (req: OptionRequest, res) => {
  const { id } = req.params;
  const options = getPollOptions(Number(id));
  if (!options) {
    return res.status(404).json({ message: 'Poll not found' });
  }
  return res.json(options);
});

router.get('/:optionId', (req: OptionRequest, res) => {
  const { id, optionId } = req.params;
  const option = getPollOptionById(Number(id), Number(optionId));
  if (!option) {
    return res.status(404).json({ message: 'Option not found' });
  }
  return res.json(option);
});

export default router;
