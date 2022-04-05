import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import Context from './context/CountContext';

ReactDOM.render(
  <>
  <Context>

    <Provider store={store}>
      <Auth0Provider
        domain="dev-8jjzpwep.us.auth0.com"
        clientId="wSuINb747yeWLLRXuOsjv4KKN3BQ3CwM"
        redirectUri={window.location.origin}
        >
        <App />
      </Auth0Provider>
      <React.StrictMode></React.StrictMode>
    </Provider>
        </Context>
  </>,
  document.getElementById("root")
);

reportWebVitals();
