import { createContext  } from "react";

const userContext = createContext({
    loggedUser: "unknown",
    theme: "light",
    setloggedUser: () => { },
    setTheme: () => { }
    // Placeholder function
    // This is just a placeholder value. In a real application, this would likely be null or an empty object until a user logs in.
   
});

export default userContext;

// Now this is default value how can we modify the context value?
// here we create a context for the user, which will hold the information about the logged-in user. We initialize it with an object that has a property `loggedUser` set to null, indicating that there is no user logged in by default. This context can be used throughout the application to access and update the logged-in user's information.