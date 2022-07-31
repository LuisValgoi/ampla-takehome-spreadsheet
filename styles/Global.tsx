import React from 'react';
import { Global } from '@emotion/react';

const GlobalComp: React.FC = () => {
  return (
    <Global
      styles={`
    html,
    body,
    main {
      position: relative !important;
      height: 100% !important;
      margin: 0 !important;
    }

    #__next {
      height: 100% !important;
    }

    .background-line {
      height: 100% !important;
    }

    .background-texture {
      height: 100% !important;
    }      `}
    />
  );
};

export default GlobalComp;
