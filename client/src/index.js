import { ReactDOM } from "react-dom";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
  );