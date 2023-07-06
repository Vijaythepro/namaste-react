import React  from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", { id: "parent" }, 
[React.createElement("div", { id: "child 1" }, [
    React.createElement("h1", {}, "This is heading one"),
    React.createElement("h2", {}, "This is headinfg two")]
),
React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "This is heading one"),
    React.createElement("h2", {}, "This is headinfg two")]
)]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

