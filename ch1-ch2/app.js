import React from "react";
import ReactDOM from "react-dom/client";  

// const heading = React.createElement("h1",{},"Namaste Everyone")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const heading1 = React.createElement("h1", {}, "Heading 1 from React");
const heading2 = React.createElement("h2", {}, "Heading 2 from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

const container = React.createElement("div", {}, [heading1, heading2]);

root.render(container);
