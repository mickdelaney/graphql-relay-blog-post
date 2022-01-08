import * as React from "react";
import * as ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay";

import { RelayEnvironment } from "./relay";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <React.Suspense fallback={<h1>Loading Data...</h1>}>
          <App />
        </React.Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
