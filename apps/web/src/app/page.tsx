import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center gap-4 p-24'>
        <h1 className='text-4xl font-bold'>Polling app (Web)</h1>
        <h2 className='text-3xl font-semibold'>Landing Page</h2>
        <p className='text-md'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi illo
          velit unde id voluptas et saepe, nostrum rerum amet eius aspernatur
          incidunt maxime consequuntur doloremque perferendis aliquam ratione,
          ad atque?
        </p>
      </main>
      <footer className='flex items-center justify-between border-t-2 border-gray-200 p-4'>
        <div className='flex items-center space-x-4'>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
      </footer>
    </>
  );
}
