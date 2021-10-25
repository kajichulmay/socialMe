import { createContext, useState } from "react";
const SpinnerContext = createContext();

const SpinnerContextProvider = ({ children }) => {
    const [spinner, setSpinner] = useState(false);

    return <SpinnerContext.Provider value={{ spinner, setSpinner }}>{children}</SpinnerContext.Provider>;
};

export { SpinnerContext, SpinnerContextProvider };
