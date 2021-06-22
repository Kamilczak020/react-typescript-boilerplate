// See https://github.com/mobxjs/mobx-react-lite/#observer-batching
import 'mobx-react-lite/batchingForReactDom';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Application } from './app';

const history = createBrowserHistory();
ReactDOM.render(<Application history={history} />, document.getElementById('root'));
