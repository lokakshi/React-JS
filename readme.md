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
