import React from 'react';
import { prisma } from '@repo/database';
import Link from 'next/link';

export default async function PollsPage() {
  const polls = await prisma.poll.findMany({
    include: {
      _count: {
        select: {
          options: true,
        },
      },
    },
  });

  if (polls.length === 0) {
    return (
      <div className='flex h-screen items-center justify-center'>
        No polls found
      </div>
    );
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <table className='table-auto'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {polls.map((poll) => (
            <React.Fragment key={poll.id}>
              <tr>
                <td>
                  <Link href={`/polls/${poll.id}`}>{poll.title}</Link>
                </td>
                <td>{poll.createdAt.toLocaleDateString()}</td>
                <td>{poll.updatedAt.toLocaleDateString()}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
