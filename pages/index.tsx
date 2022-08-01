import type { NextPage } from 'next';
import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { v4 as uuid } from 'uuid';

import SpreadSheet from 'components/Spreadsheet';
import FloatingButtons from 'components/FloatingButtons';
interface IHome {
  linkId: string;
}

const Home: NextPage<IHome> = (props) => {
  const linkId = useMemo(() => props.linkId ?? uuid(), [props.linkId]);

  return (
    <>
      <Head>
        <title>Ampla TakeHome Spreadsheet</title>
        <meta name="description" content="Ampla TakeHome Spreadsheet" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <FloatingButtons linkId={linkId} />

      <main>
        <SpreadSheet linkId={linkId} />
      </main>
    </>
  );
};

export default Home;
