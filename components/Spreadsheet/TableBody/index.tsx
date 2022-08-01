import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import { ISpreadsheetData } from 'components/Spreadsheet';
import TableBodyCell from 'components/Spreadsheet/TableBodyCell';

import * as UI from './index.style';

interface TableBodyProps {
  cells: string[][];
  letters: string[];
  linkId: string;
  data: ISpreadsheetData | undefined;
}

const TableBody: React.FC<TableBodyProps> = (props) => {
  const renderTableBody = useMemo(
    () => (
      <UI.TableBody>
        {props.cells.map((row, number) => (
          <tr key={uuid()}>
            <UI.TableBodyFixedCell>{number + 1}</UI.TableBodyFixedCell>
            {row.map((_, letter) => (
              <TableBodyCell
                key={uuid()}
                number={number}
                letters={props.letters}
                letterIdx={letter}
                linkId={props.linkId}
                data={props.data}
              />
            ))}
          </tr>
        ))}
      </UI.TableBody>
    ),
    [props.cells, props.data, props.letters, props.linkId],
  );

  return renderTableBody;
};

export default React.memo(TableBody);
