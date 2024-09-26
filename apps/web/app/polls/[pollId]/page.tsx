import Link from 'next/link';
import { prisma } from '@repo/database';

export default async function PollPage({
  params,
}: {
  params: { pollId: string };
}) {
  const { pollId } = params;
  const poll = await prisma?.poll.findFirst({
    where: {
      id: Number(pollId),
    },
    include: {
      options: true,
    },
  });

  if (!poll) {
    return (
      <div className='flex h-screen items-center justify-center'>
        Poll does not exist
      </div>
    );
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h2 className='text-2xl font-bold'>{poll.title}</h2>
      <div className='flex flex-col gap-2'>
        {poll.options.map((option) => (
          <div key={option.optionId}>
            {option.name} ({option.votes}{' '}
            {option.votes === 1 ? 'vote' : 'votes'})
          </div>
        ))}
      </div>
      <Link href='/polls'>Back to Polls</Link>
    </div>
  );
}
