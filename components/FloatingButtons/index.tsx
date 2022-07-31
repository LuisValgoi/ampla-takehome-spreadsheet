import React, { useCallback } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import * as UI from './index.style';

interface IFloatingButtonsProps {
  link?: string;
}

const FloatingButtons: React.FC<IFloatingButtonsProps> = (props) => {
  const handleLinkClick = useCallback(() => {
    const id = uuid();
    const prefix = window.location.host;
    const url = `http://${prefix}/${id}`;
    alert(`Spreadsheet Link: ${url}`);
  }, []);

  return (
    <UI.FloatingButtons>
      <UI.Button onClick={handleLinkClick}>
        <Image src="/link.svg" alt="Link" height={15} width={15} />
      </UI.Button>
    </UI.FloatingButtons>
  );
};

export default FloatingButtons;
