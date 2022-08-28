import Link from 'next/link';
import Image from 'next/image';
import AboutPage from '../pages/about';
import BlogPage from '../pages/blog/index';

function Header() {
  return (
    <header className='bg-gray-900 text-gray-100 shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <Image src='/images/logo.png' width={40} height={40} alt='logo' />
            <span className='ml-3 text-xl'>DevSpace</span>
          </a>
        </Link>

        <nav className='flex flex-wrap md:w-4/5 itms-center justify-end '>
          <Link href='/blog'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-500'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-500'>
              About
            </a>
          </Link>
          <Link href='/FAQ'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-500'>
              FAQ's
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
