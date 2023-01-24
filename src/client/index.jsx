import * as React from "react";
import * as ReactDom from "react-dom";
import {Root} from "../Root";

window.addEventListener("load", () => {
  ReactDom.hydrate(<Root />, document.getElementById("react_root"));
});
