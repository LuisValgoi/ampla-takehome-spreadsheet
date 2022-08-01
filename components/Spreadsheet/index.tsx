import React, { useEffect, useMemo, useState } from 'react';

import { LETTERS } from 'utils/Spreadsheet';
import { EMPTY_DATA } from 'utils/Spreadsheet';

import TableBody from './TableBody';
import TableHead from './TableHead';

import * as UI from './index.style';

export interface ISpreadsheetData {
  [key: string]: {
    display: string;
    value: string;
    dep?: string;
  };
}
interface ISpreadsheet {
  linkId: string;
}

const SpreadSheet: React.FC<ISpreadsheet> = (props) => {
  // variables
  const linkId = useMemo(() => props.linkId, [props.linkId]);

  // render
  const renderTable = useMemo(() => {
    return (
      <UI.Table>
        <TableHead letters={LETTERS} />
        <TableBody cells={EMPTY_DATA} letters={LETTERS} linkId={linkId} />
      </UI.Table>
    );
  }, [linkId]);

  return renderTable;
};

export default React.memo(SpreadSheet);
