import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import NumberList from "./NumberList.jsx";

const rootElement = document.querySelector("#root");

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(<NumberList numbers={numbers} />, rootElement);
