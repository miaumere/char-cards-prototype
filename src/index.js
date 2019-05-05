import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Test from './components/Test';
import App from './components/App/App';

ReactDOM.render(
<App />,
document.getElementById('root'));

serviceWorker.unregister();