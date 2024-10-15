'use client';

import { PieChart, Pie, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: {
    name: string;
    votes: number;
  }[];
}

export function Chart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey='votes' nameKey='name' fill='#8884d8'></Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
