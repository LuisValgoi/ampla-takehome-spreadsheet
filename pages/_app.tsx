import { SpreadSheetProvider } from 'contexts/SpreadSheetContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SpreadSheetProvider>
      <Component {...pageProps} />
    </SpreadSheetProvider>
  );
}

export default MyApp;
