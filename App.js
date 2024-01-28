/*

<div id="parent">
   <div id="child">
     <h1>I am H1 Tag<h1>
   </div>
</div>

*/

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 Tag"), React.createElement("h2", {}, "I am h2 Tag")],

    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
