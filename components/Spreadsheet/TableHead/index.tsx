import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import * as UI from './index.style';

interface TableHeadProps {
  letters: string[];
}

const TableHead: React.FC<TableHeadProps> = (props) => {
  const EMPTY = useMemo(() => '', []);

  return (
    <UI.TableHead>
      <UI.TableHeadRow>
        <UI.TableHeadCell $none>{EMPTY}</UI.TableHeadCell>
        {props.letters.map((letter) => (
          <UI.TableHeadCell key={uuid()}>{letter}</UI.TableHeadCell>
        ))}
      </UI.TableHeadRow>
    </UI.TableHead>
  );
};

export default TableHead;
