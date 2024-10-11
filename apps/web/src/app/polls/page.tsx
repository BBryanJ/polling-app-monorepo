import React from 'react';
import { prisma } from '@repo/database';
import { DataTable } from './dataTable';
import { columns } from './columns';

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
      <DataTable columns={columns} data={polls} />
    </div>
  );
}
