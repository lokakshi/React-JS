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

### images

we can add images in our app using external URLS , or keep Static images in Public folder or src/assets

Storing images in src/assets is the standard way to leverage build tools like Webpack or Vite for optimization and caching
Webpack processes the file, adds a hash to the name for cache-busting, and can inline small images as data URIs to reduce server requests.
Files in the public folder are not processed by the build tool and are copied directly to the build root

## Lets learn how class based component work

```jsx
class About extends React.Component{
    constructor(props){
        super(props);
    }
    this.state={
        products:["apple","mango"],
        category:["fruits","vegetable"]
    }

    componentDidMount(){

    }
    render(){
        return (
            <Child />
        )
    }
}

class Child extends React.Component{
    constructor(props){
        super(props);
    }
    this.state={
        count:0,
        qty:0
    }
     componentDidMount(){
        
    }
    render(){
        return (
            <div>Child Component</div>
        )
    }
}


The above 2 component has most of the things a class component has the componentDidMount() is like useEffect in 
funcitonal Component it is called after the component has mounted to make API calls 

in Class based component with create a new instance of a class -> constructor is called -> than render method is called 
if( render ) menthod see in JSX that there is a child component so we start creating instance of the child component once it finished mounting that the parent get mounted
```

## Custom Hooks

So we have menu compenent it does 2 things fetchs data and then display it on UI
But ideally menu component task should be just to show menu
So we will build custom hook to do the first part which to fetch data
added a custom hook to handle online / offline for user

## Dynamic Bundling , Lazy Loading ,chunking , Bundle Size Reduction

We added Grcoery section in our application now we have two heavy component one is home tab and now grocery section
so we will load grocery component using lazy loading to reduce the bundle size with help of lazy loading when app loads we dont have grocery code in the beginning when we request for grocery tab only that time to code is made available
by doing this we break application into smaller chunks or smaller bundlers so that overall bundle size is reduced and app doesn't slows down
Refer App.js code to see how lazy() function that reactJs gives use works in case of grocery component
When we navigate to grocery page it will take some time to load the data for the grocery page so react might give us error to handle this case we use "Suspense" component that we use to wrap the grocery component and that Suspense has a fallback to avoid the error so that react knows what to render until the grocery code is not available

## Added Tailwind Css

we added tailwindcss to our ReactJs project (parcel bundler)

## Redux Toolkit

we will add redux and redux-toolkit
build our redux store and connect the store to our application
build Slices and create Dispatch action and reducer function
step 1
<!-- import  { configureStore } from "@reduxjs/toolkit";

const store = configureStore();

export default store; -->
we created a basic store
Now we need to connect/provide store with our application
  <!-- <Provider store={store}>
    <userContext.Provider value={{ loggedUser: user,setUser ,theme, setTheme }}>
      <div className="app">
        {/* header */}
       <HeaderComponent />
      {/* body */}
      <Outlet />
      {/* footer */}
      </div>
      </userContext.Provider>
      </Provider> -->
Now Store is connected / Provided to our app
we have create a cartSlice which has reducer fucntion with respective actions

## Testing

Now we will be testing our application we will write testcases and run them
Types of testing - from developer POV
Manual testing - that we usually do(but it's not a possible everytime to completely test the entire application)
Testing on App using Test Cases

## Types of Testing Developer can do using JEST

Unit Testing-You test React component in isolation (Like just test header Component -so we will do just unit testing of header component)
Integration Testing-(Testing the integration among component -(Like if we search something and result filters so muliple component talk to each other))
End to End Testing-E2E testing from starting to end all the flows we verify-(basically a simulation tools: cypress , Selinium)
what we did so far
we added - React testing Lib
React testing lib requires jest and jest requires babel and we need a babel config so we added that
since we have parcel uses babel by deafult so we have configuration of parcel babel and our own babel config in application
So parcel should not use our babel config so we need to add config for parcel to stop using default babel config and use ours .parcelrc
<!-- adityalokakshi@Adityas-MacBook-Air React-JS-1 % npm run test

> y@1.0.0 test
> jest

No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/adityalokakshi/Aditya Projects/React-JS-1
  37 files checked.
  testMatch: **/__tests__/**/*.?([mc])[jt]s?(x), **/?(*.)+(spec|test).?([mc])[jt]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 37 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches -->
so far if we have got his message so testing env is setuped in our application
Now we will start writing test cases so we will write jest configuration npx jest --init
that created a jest.config.js for us
React testing library we need to install jsdom package separately
Before writing big test case lets start with dummy testcase
we created a sum.js file that is normal js function and now lets try to test it
we will write unit test case for to check contactus page lload on dom or not
<!-- TypeError: expect(...).toBeInTheDocument is not a function -->
we got this error because we need to install a new lib : @testing-library/jest-dom
we instal it now,what? we import import "@testing-library/jest-dom"
Okay so we wrote some test cases on contact us page those are unit test cases specific to that component
Now lets write test cases for HeaderComponent but as we started we found errors as header component uses Redux we got few issues
what are these issues?
we are running unit test case on header component on jsDom so that jsdom understands jsx code react code ..but it doesn't know redux toolkit code!!as it is part of redux
so we need to provide this store to header in testcase file same way will also provide RouterProvider also and it passed
we did lot of unit testing on header component , Restuarant card component with props using mock data, we tested restaurantcard HOC testing

## Integration Testing

Now we will write entire flow testcase
We have Search Option when user search something depending upon that the list of card changes so this will be entire flow test of searching restaurant
