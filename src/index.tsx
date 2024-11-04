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
import { UserProvider } from "./utils/userContext";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <FirebaseContext.Provider value={config}>
          <GoogleOAuthProvider clientId="582672524351-u44ne1gf581tlj3hg6ukmqtfrn9e66u0.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>
        </FirebaseContext.Provider>
      </UserProvider>
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
