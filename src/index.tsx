import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { FirebaseContext } from "./components/Firebase";
import config from "./components/Firebase/firebase";
import { ThemeProvider } from "./components/Theme/context";
import { GoogleOAuthProvider } from '@react-oauth/google';

  

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FirebaseContext.Provider value={config}>
        <GoogleOAuthProvider clientId="843568926513-vi3j7f1magt84slbpitlthvlg6ml7a63.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </FirebaseContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
