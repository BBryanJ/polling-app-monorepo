import Link from 'next/link';
import { prisma } from '@repo/database';
import { Button } from '@repo/ui/components/ui/button';
import { Card, CardContent, CardHeader } from '@repo/ui/components/ui/card';

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

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Button asChild variant='link'>
        <Link href='/polls'> Back to Polls</Link>
      </Button>
      {!poll ? (
        <h1 className='text-2xl'>Poll does not exist</h1>
      ) : (
        <Card>
          <CardHeader>
            <span className='text-2xl font-bold'>{poll.title}</span>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-2'>
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
          </CardContent>
        </Card>
      )}
    </div>
  );
}
