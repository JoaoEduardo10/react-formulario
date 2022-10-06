import { createContext, useReducer } from "react";

export const data = {
    loadin: false,
    mensagem: "success"
}

const reducer = (state, actions) => {
    // eslint-disable-next-line
    switch (actions.type){
        // eslint-disable-next-line
        case "success":{
            return {...state, loadin: true}
        }
        // eslint-disable-next-line
        case "ERROR": {
            return {...state, loadin: false}
        }
            
        
    }

    return {...state}
}

export const Context = createContext()

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, data)


    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}