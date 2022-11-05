import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { store} from './application/store'
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router  } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = { store }>
      <Router>
        <App />
      </Router>
    </Provider>
  
);

