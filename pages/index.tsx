import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { v4 as uuid } from 'uuid';

import SpreadSheet from 'components/Spreadsheet';
import FloatingButtons from 'components/FloatingButtons';
interface IHome {
  linkId: string;
}

const Home: NextPage<IHome> = (props) => {
  const [linkId, setLinkId] = useState<string>();
  const existingLinkId = props.linkId;

  useEffect(() => {
    setLinkId(existingLinkId ?? uuid());
  }, [existingLinkId]);

  return (
    <>
      <Head>
        <title>Ampla TakeHome Spreadsheet</title>
        <meta name="description" content="Ampla TakeHome Spreadsheet" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <FloatingButtons linkId={linkId!} />

      <article>
        <SpreadSheet linkId={linkId!} />
      </article>
    </>
  );
};

export default Home;
