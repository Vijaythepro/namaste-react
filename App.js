import React  from "react";
import ReactDOM from 'react-dom/client';

//React.createElement() returns js object ==> HTMLElement(render)

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

//JSX is an HTML or XML like syntax.

//jsx (transpiled before it reaches js engine) --parcel -->bable
//jsx => transpiled into React.createEelemnt(its js object)--> htmlElement(render)

const jsxHeading = <h1 className="heading" tabIndex={1}>Namaste react rocket🚀</h1>;

//attributes are in cameCase

const p = (<p>
    loreim ele eposos cdsnjk✍️
</p>)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

