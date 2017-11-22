import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

import Routes from './routes';

const App = () => (
  <Routes />
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
