import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import '../styles/globals.css';

import { ProvideApp } from '../hooks/useAppContext';
import { client } from '../apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
        <ProvideApp>
          <Component {...pageProps} />
        </ProvideApp>
      </ApolloProvider>
  );
}

export default MyApp;
