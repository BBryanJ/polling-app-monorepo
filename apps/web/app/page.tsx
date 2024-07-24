import { Code } from '@repo/ui/code';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-4xl font-bold'>Polling app (Web)</h1>
      <p className='text-md mt-4'>
        Running from <Code className='font-mono font-bold'>apps/web</Code>
      </p>
    </main>
  );
}
