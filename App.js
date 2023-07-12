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

//React element
const p = (
<p>
    loreim ele eposos cdsnjk✍️
</p>
);


// React functional component


// Functional component uses a javascript function to create component
const HeadingComponent = () => {
    return <h2>Namaste React from functional component 🚀</h2>;
};

//HeadingComponent and HeadingComponent2 are same 
const HeadingComponent2 = () => (
     <h2>Namaste React from functional component 🚀</h2>
);

//shorthand syntax
const HeadingComponent3 = () => <h3>This component is without return statement</h3>;


//component composition
const FooterComponent = () => (
    <div className="container">
        <HeadingComponent/>
        <h6> All rights reserved @ 2024</h6>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FooterComponent/>);

