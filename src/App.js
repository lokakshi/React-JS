// we will try creating a nested div structure like parent child and grandchild using the createElement method of the React library. We will also add some attributes to the elements we create.
// in addition we will also show how to create siblings using the createElement method. We will create a parent div with an id of 'parent', a child div with an id of 'child', and a grandchild h1 tag with an id of 'grandchild'. We will also create a sibling h1 tag with an id of 'heading' that will be rendered alongside the parent div.
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";




// Now we will build our first project . We will create a food delivery app that will show a list of restaurants and their details. We will create a header component that will contain the logo and navigation items, a body component that will contain the search bar and restaurant cards, and a restaurant card component that will show the details of each restaurant. We will also create some dummy data for the restaurants and pass it as props

// Now we will build our first project .
const AppLayout = () => {
  return (
    <div className="app">
      {/* header */}
      <HeaderComponent />
      {/* body */}
      <BodyComponent />
      {/* footer */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// we are using the createRoot method of the ReactDOM library to create a root element that will be used to render our React component. We pass in the DOM element with the id of 'root' as an argument to this method.
root.render(<AppLayout />);
// Finally, we call the render method on the root element and pass in the heading element we created earlier. This will render the 'hello world' message inside the 'h1' tag on the webpage.
