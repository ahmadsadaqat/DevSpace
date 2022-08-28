import Head from 'next/head';
import Header from '../components/Header';
import Search from './Search';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.icon' />
      </Head>

      <Header />
      <Search />

      <main className='container px-7 mx-auto my-7'>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'development, coding, programming, javascript',
  description:
    'Welcome to the DevSpace, where you can learn about programming with easy to understandable tutorials',
};
