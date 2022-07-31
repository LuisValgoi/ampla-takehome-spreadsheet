import React, { useEffect, useState } from 'react';

import { getData, LETTERS } from 'utils/Spreadsheet';
import { EMPTY_DATA } from 'utils/Spreadsheet';

import TableBody from './TableBody';
import TableHead from './TableHead';

import * as UI from './index.style';

export interface ISpreadsheetData {
  [key: string]: string;
}
interface ISpreadsheet {
  linkId: string;
}

const SpreadSheet: React.FC<ISpreadsheet> = (props) => {
  const [data, setData] = useState<ISpreadsheetData>();

  useEffect(() => {
    setData(getData(props.linkId));
  }, [props.linkId]);

  return (
    <UI.Table>
      <TableHead letters={LETTERS} />
      <TableBody cells={EMPTY_DATA} letters={LETTERS} linkId={props.linkId} data={data} />
    </UI.Table>
  );
};

export default SpreadSheet;
