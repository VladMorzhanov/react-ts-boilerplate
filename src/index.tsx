import * as React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import './assets/styles/main.scss';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  console.log('MODULE IS HOT!');
  module.hot.accept('./containers/App', () => {
    console.log('ACCEPTING MODULE!');
    const NextApp = require('./containers/App').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
