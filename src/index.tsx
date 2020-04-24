import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

function Entry() {
  React.useEffect(() => {
    console.log("设置游客身份2222");
    // cookie存入游客身份
    document.cookie = "role=visitor";
  }, []);

  return (
    <BrowserRouter keyLength={7}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  );
}

ReactDOM.render(<Entry />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
