import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { DefaultLayout } from 'layouts/DefaultLayout';

import { ErrorBoundary } from 'components/ErrorBoundary';

import { UserContextProvider } from 'contexts/userContext';

import 'styles/global.scss';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DashBoard</title>
      </Head>

      <UserContextProvider>
        <DefaultLayout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </DefaultLayout>
      </UserContextProvider>
    </>
  );
};

export default MyApp;
