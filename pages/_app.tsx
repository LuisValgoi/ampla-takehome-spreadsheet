import { SpreadSheetProvider } from 'contexts/SpreadSheetContext';
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SpreadSheetProvider>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </SpreadSheetProvider>
  );
}

export default MyApp;
