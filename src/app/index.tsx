import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCheck } from '@fortawesome/pro-solid-svg-icons';
import { Layout } from './containers/Layout';
import { StoreProvider } from './stores';

library.add(faCheck, faTimes);

export interface AppProps {
  history: History<any>;
}

export const Application = hot(({ history }) => (
  <StoreProvider>
    <Layout history={history} />
  </StoreProvider>
));
