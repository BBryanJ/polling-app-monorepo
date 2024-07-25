import { Code } from '@repo/ui/code';

export default function Home() {
  return (
    <>
      <header className='flex items-center justify-between border-b-2 border-gray-200 p-4'>
        <nav className='flex items-center justify-between p-4'>
          <ul className='flex space-x-4'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Create Poll</a>
            </li>
            <li>
              <a href='/'>Vote</a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center space-x-4'>
          <span>Login</span>
          <span>Sign Up</span>
        </div>
      </header>
      <main className='flex min-h-screen flex-col items-center justify-center p-24'>
        <h1 className='text-4xl font-bold'>Polling app (Web)</h1>
        <p className='text-md mt-4'>
          Running from <Code className='font-mono font-bold'>apps/web</Code>
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
