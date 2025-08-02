import { createContext } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => { 
    
    

    const contextValue = {


    }
    return<AppContextProvider value={contextValue}>
        {props.children}
    </AppContextProvider>
}