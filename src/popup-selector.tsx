import React = require("react");
import ReactDOM = require("react-dom");

export function popupSelector(params: { element: HTMLElement }) {
    ReactDOM.render(<></>, params.element)
}