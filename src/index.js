import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "./css/bootstrap.min.css";
import "./css/squareStyles.css";

const params = {
    color_theme: document.getElementById('artificial-scarcity-root').dataset.color_theme,
    layout: document.getElementById('artificial-scarcity-root').dataset.layout.split(','),
    timeline: document.getElementById('artificial-scarcity-root').dataset.timeline
};


ReactDOM.render(<App {...params} />, document.getElementById('artificial-scarcity-root'));