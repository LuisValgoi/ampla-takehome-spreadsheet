import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import * as UI from './index.style';

interface TableHeadProps {
  letters: string[];
}

const TableHead: React.FC<TableHeadProps> = (props) => {
  // variables
  const EMPTY = useMemo(() => '', []);
  const LETTERS = useMemo(() => props.letters, [props.letters]);

  // render
  const renderTableHead = useMemo(() => {
    return (
      <UI.TableHead>
        <UI.TableHeadRow>
          <UI.TableHeadCell $none>{EMPTY}</UI.TableHeadCell>
          {LETTERS.map((letter) => (
            <UI.TableHeadCell key={uuid()}>{letter}</UI.TableHeadCell>
          ))}
        </UI.TableHeadRow>
      </UI.TableHead>
    )
  }, [EMPTY, LETTERS])

  return renderTableHead;
};

export default React.memo(TableHead);
