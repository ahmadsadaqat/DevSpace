import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className='flex flex-col items-center mt-5'>
        <Image
          src='/images/logo.png'
          width={70}
          height={70}
          className='bg-gray-800 rounded-2xl'
        />
        <h1 className='text-6xl my-5'>Whooops! </h1>
        <h2 className='text-4xl text-gray-400'>This Page does not Found</h2>
        <Link href='/'>
          <a className='mt-5 text-lg'>Go Back home</a>
        </Link>
      </div>
    </Layout>
  );
}
