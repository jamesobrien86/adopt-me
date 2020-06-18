import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "luna", type: "dog", breed: "Lab" }),
    React.createElement(Pet, { name: "luna", type: "dog", breed: "Lab" }),
    React.createElement(Pet, { name: "luna", type: "dog", breed: "Lab" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
