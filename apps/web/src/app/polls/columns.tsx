'use client';

import { Poll } from '@repo/database';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const columns: ColumnDef<Poll>[] = [
  {
    accessorKey: 'id',
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: 'title',
    header: () => <div className='text-left'>Title</div>,
    cell: ({ row }) => {
      const pollUrl = `/polls/${row.getValue('id')}`;
      return (
        <div className='text-left font-medium'>
          <Link href={pollUrl}>{row.getValue('title')}</Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: () => <div className='text-right'>Created At</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'));
      return (
        <div className='text-right font-medium'>{date.toLocaleString()}</div>
      );
    },
  },
  {
    accessorKey: 'updatedAt',
    header: () => <div className='text-right'>Updated At</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue('updatedAt'));
      return (
        <div className='text-right font-medium'>{date.toLocaleString()}</div>
      );
    },
  },
];
