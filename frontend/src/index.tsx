import React from "react";
import ReactDOM from "react-dom/client";

// Import React-Router-Dom
import { BrowserRouter as Router } from "react-router-dom";

// Import App Component
import App from "./App";

// Import Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Configuration of the Redux
import { Provider } from 'react-redux';
import store from './store/root/store';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);
