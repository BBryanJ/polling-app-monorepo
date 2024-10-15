import Link from 'next/link';
import { prisma } from '@repo/database';
import { Button } from '@repo/ui/components/ui/button';
import { Card, CardContent, CardHeader } from '@repo/ui/components/ui/card';
import { Pie, PieChart } from 'recharts';
import { Chart } from './chart';

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
        <h1 className='text-2xl'>Poll does not exist</h1>
      </div>
    );
  }

  const optionsData = poll?.options.map((option) => ({
    name: option.name,
    votes: option.votes,
  }));

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Button asChild variant='link'>
        <Link href='/polls'> Back to Polls</Link>
      </Button>
      <Card className='w-3/4'>
        <CardHeader>
          <span className='text-2xl font-bold'>{poll.title}</span>
        </CardHeader>
        <CardContent className='flex flex-col gap-2 lg:flex-row'>
          <div className='flex flex-1 flex-col gap-2'>
            {poll.options.map((option) => (
              <div
                key={option.optionId}
                className='text-md inline-flex justify-between rounded-md border-2 border-gray-300 p-2 hover:bg-gray-400'
              >
                <span>{option.name}</span>
                <span className='font-semibold'>{option.votes}</span>
              </div>
            ))}
          </div>
          <div className='w-min flex-1 items-center justify-center'>
            <Chart data={optionsData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
