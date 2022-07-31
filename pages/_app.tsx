import { SpreadSheetProvider } from 'contexts/SpreadSheetContext';
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
