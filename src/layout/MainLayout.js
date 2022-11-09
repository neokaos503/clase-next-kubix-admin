import Footer from '@components/footer';
import Header from '@components/header';
import Head from 'next/head';

export const siteTitle = 'Kubixcorp Website';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Fabrica desoftware " />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <main>
          <Header />
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
          <Footer />
        </main>
      </div>
    </>
  );
}
