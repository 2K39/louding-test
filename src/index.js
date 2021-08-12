import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { LoaderProvider, useLoading, BallTriangle } from '@agney/react-loading';


ReactDOM.render(
<LoaderProvider indicator={<BallTriangle width="50" />}>
    <App/>
</LoaderProvider>
, document.querySelector("#root"));