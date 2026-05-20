# React-JS-1

This project covers React from basic to advanced concepts. It includes industrial best practices and real-world examples.

## What you will learn

- React fundamentals: components, JSX, props, state, and lifecycle.
- Advanced React: hooks, context, routing, and performance optimization.
- Project-based learning with practical applications.
- Modern React tooling and workflows.

## Projects

- Build simple UI components.
- Create dynamic single-page applications.
- Implement reusable component patterns.
- Learn state management and API integration.

## Goal

To provide a complete learning path for React development, from beginner concepts to advanced industry techniques.

## Steps

what we did "npx parcel index.html" we used parcel to host our local code on server that was created by parcel
npx command is used to execute a package, npm we use to install certain package
we earlier used cdn to have reactjs in our application but in industries it not a preferred way to do it so we will use npm package of react and react-router
Cdn calls are heavy so it will be better to use react in package.json
we added browserList in package.json to showcase which all browser the app will support .

## Parcel

Does Image optimisation .
Creates Dev build
Create local server to host the application .
Parcel used HMR - hot module replacement to auto refresh changes made in the code so that you don't need to refresh browser .
Parcel does caching (and the cache is stored locally ) when in  development phase .
Parcel continously reads file using watching algorithm so that any changes made are visible on browser as soon as user saves those changes .
Parcel does bundling of files .
Parcel does code spliting , Compresses files , Minification .
Parcel does consitent hashing .
Parcel does differential bundling .
Parcel does diagnositic .
Parcel does good Error handling .
Parcel also supports hosting application on https .
Parcel does Tree Shaking : Remove un-used code from the application automatically .

## Food Ordering Project

```jsx
// const parent = React.createElement(
//   "h1",
//   { id: "parent", key: "parent" },
//    "hello world 1"
//   );

// const heading = React.createElement("h1", { id: "heading" }, "hello world");
// we created a react element using the createElement method of the React library. The first argument is the type of element we want to create, in this case, an 'h1' tag. The second argument is an object that can contain any attributes we want to add to the element, but in this case, we are leaving it empty. The third argument is the content of the element, which is 'hello world'.

// Now we will create React Element using JSX syntax. JSX is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript files. It makes it easier to create React elements and components.
// const parent = (
//   <div id="parent">
//     <div id="child">
//       <h1 id="grandchild">hello world</h1>
//     </div>
//   </div>
// );
// In the above code, we are creating a nested div structure using JSX syntax. We have a parent div with an id of 'parent', a child div with an id of 'child', and a grandchild h1 tag with an id of 'grandchild'. The content of the h1 tag is 'hello world'.

// In the below code now we will create React Component using JSX syntax. A React component is a reusable piece of code that can be used to create UI elements. We will create a functional component called 'App' that will return the JSX code we created earlier.
// const Title=()=>{
//   return <h1 id="heading">Title</h1>;
// }
// const BodyComponent=()=>{
//   return (

//     <div id="parent">
//       <div id="child">
//         <Title/>
//         <h1 id="grandchild">hello world</h1>
//       </div>
//     </div>
//   );
// }
```
