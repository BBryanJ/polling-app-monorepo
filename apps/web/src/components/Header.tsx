import Link from 'next/link';

export default function Header() {
  return (
    <header className='border-b-3 flex items-center justify-between border-gray-200 p-4'>
      <nav className='flex items-center justify-between p-5'>
        <ul className='flex space-x-5'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <Link href='/new-poll'>Create Poll</Link>
          </li>
          <li>
            <Link href='/polls'>Polls</Link>
          </li>
        </ul>
      </nav>
      <div className='flex items-center space-x-5'>
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </header>
  );
}
