 const heading = React.createElement('h1',{id : "heading"},'hello world');
        // we created a react element using the createElement method of the React library. The first argument is the type of element we want to create, in this case, an 'h1' tag. The second argument is an object that can contain any attributes we want to add to the element, but in this case, we are leaving it empty. The third argument is the content of the element, which is 'hello world'.
        const root = ReactDOM.createRoot(document.getElementById('root'));   
        // we are using the createRoot method of the ReactDOM library to create a root element that will be used to render our React component. We pass in the DOM element with the id of 'root' as an argument to this method.
        root.render(heading);
        // Finally, we call the render method on the root element and pass in the heading element we created earlier. This will render the 'hello world' message inside the 'h1' tag on the webpage.