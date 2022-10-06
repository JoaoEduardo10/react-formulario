import { createContext, useReducer } from "react";

export const data = {
    loadin: false,
    mensagem: "success"
}

const reducer = (state, actions) => {
    switch (actions.type) {
        case "success":{
            return {...state, loadin: true}
        }
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