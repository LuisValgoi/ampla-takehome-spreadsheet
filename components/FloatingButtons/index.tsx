import React, { useCallback } from 'react';
import Image from 'next/image';

import * as UI from './index.style';

interface IFloatingButtonsProps {
  linkId: string;
}

const FloatingButtons: React.FC<IFloatingButtonsProps> = (props) => {
  const handleLinkClick = useCallback(() => {
    const url = `http://${window.location.host}/link/${props.linkId}`;
    alert(url);
  }, [props]);

  return (
    <UI.FloatingButtons>
      <UI.Button onClick={handleLinkClick}>
        <Image src="/link.svg" alt="Link" height={15} width={15} />
        GENERATE LINK
      </UI.Button>
    </UI.FloatingButtons>
  );
};

export default FloatingButtons;
