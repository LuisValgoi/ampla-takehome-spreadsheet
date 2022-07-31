import Home from 'pages';
import React from 'react';

import { useRouter } from 'next/router';

const SpreadsheetByLink: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Home linkId={id as string} />;
};

export default SpreadsheetByLink;
