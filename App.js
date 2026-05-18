// we will try creating a nested div structure like parent child and grandchild using the createElement method of the React library. We will also add some attributes to the elements we create.
// in addition we will also show how to create siblings using the createElement method. We will create a parent div with an id of 'parent', a child div with an id of 'child', and a grandchild h1 tag with an id of 'grandchild'. We will also create a sibling h1 tag with an id of 'heading' that will be rendered alongside the parent div.
import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement(
//   "h1",
//   { id: "parent", key: "parent" },
//    "hello world 1"
//   );


// const heading = React.createElement("h1", { id: "heading" }, "hello world");
// we created a react element using the createElement method of the React library. The first argument is the type of element we want to create, in this case, an 'h1' tag. The second argument is an object that can contain any attributes we want to add to the element, but in this case, we are leaving it empty. The third argument is the content of the element, which is 'hello world'.

// Now we will create React Element using JSX syntax. JSX is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript files. It makes it easier to create React elements and components.
const parent = (
  <div id="parent">
    <div id="child">
      <h1 id="grandchild">hello world</h1>
    </div>
  </div>
);
// In the above code, we are creating a nested div structure using JSX syntax. We have a parent div with an id of 'parent', a child div with an id of 'child', and a grandchild h1 tag with an id of 'grandchild'. The content of the h1 tag is 'hello world'.


// In the below code now we will create React Component using JSX syntax. A React component is a reusable piece of code that can be used to create UI elements. We will create a functional component called 'App' that will return the JSX code we created earlier.
const Title=()=>{
  return <h1 id="heading">Title</h1>;
}
const BodyComponent=()=>{
  return (
  
    <div id="parent">
      <div id="child">
        <Title/>
        <h1 id="grandchild">hello world</h1>
      </div>
    </div>
  );
} 
const root = ReactDOM.createRoot(document.getElementById("root"));
// we are using the createRoot method of the ReactDOM library to create a root element that will be used to render our React component. We pass in the DOM element with the id of 'root' as an argument to this method.
root.render(<BodyComponent/>);
// Finally, we call the render method on the root element and pass in the heading element we created earlier. This will render the 'hello world' message inside the 'h1' tag on the webpage.
