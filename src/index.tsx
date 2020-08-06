import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import App from './App';
import 'typeface-roboto';
import { config } from './config';

Sentry.init({
  dsn: config.sentryDsn,
});

ReactDOM.render(<App />, document.getElementById('root'));
