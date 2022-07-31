import React from 'react';

import { LETTERS } from 'utils/Spreadsheet';
import { EMPTY_DATA } from 'utils/Spreadsheet';

import TableBody from './TableBody';
import TableHead from './TableHead';

import * as UI from './index.style';

const SpreadSheet: React.FC = () => {
  return (
    <UI.Table>
      <TableHead letters={LETTERS} />
      <TableBody cells={EMPTY_DATA} letters={LETTERS} />
    </UI.Table>
  );
};

export default SpreadSheet;
