import { user as initialUser } from "../service/localStorage";
import axios from "../config/axios";
import { createContext, useState, useEffect } from "react";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser);

    // google response
    const responseGoogle = response => {
        console.log(response);
    };
    return <AuthContext.Provider value={{ user, setUser, responseGoogle }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
