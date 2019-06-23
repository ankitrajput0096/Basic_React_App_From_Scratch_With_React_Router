import React, { Component } from "react";
import ReactDOM from "react-dom";
// import App from "./component/app.component";

import AppRoutes from './routes/routes';

ReactDOM.render(<AppRoutes />, document.querySelector("#root"));

if (module.hot) {
    module.hot.accept();
}