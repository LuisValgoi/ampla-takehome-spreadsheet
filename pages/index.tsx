import type { NextPage } from 'next';
import Head from 'next/head';

import SpreadSheet from 'components/Spreadsheet';
import FloatingButtons from 'components/FloatingButtons';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ampla TakeHome Spreadsheet</title>
        <meta name="description" content="Ampla TakeHome Spreadsheet" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <FloatingButtons />
      <article>
        <SpreadSheet />
      </article>
    </>
  );
};

export default Home;
