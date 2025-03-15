import React, { createContext, useContext, useState } from 'react';

// Create a Context for user state
const UserContext = createContext();

// Custom hook to use the UserContext
export const useAuth = () => {
    return useContext(UserContext);
};


const UserProvider = ({ children }) => { //children refers to any React components nested inside <UserProvider>

    const [user, setUser] = useState(null); // Store the user data here

    const login = (userData) => {
        setUser(userData); // Set the user data when logged in
    };

    const logout = () => {
        setUser(null); // Clear the user data when logged out
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children} {/* This will be the components that need access to this context */}
        </UserContext.Provider>
    );
};

export { UserProvider };