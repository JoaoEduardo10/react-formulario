
import "./index.css"

import { useContext } from "react";

import { Context } from "../context";

import { Form } from "../Form"
import { Mensagem } from "../Mensagem";

export const Main = () => {
    const context = useContext(Context)
    const {state} = context
    if(context.state.loadin){
        setTimeout(() => {
            context.dispatch({ type: "ERROR" })
        }, 2000);
    }

    return (
        <main>
            {context.state.loadin && <Mensagem text={"Sucesso"} type={"success"} />}
            <h1>Formulario</h1>
            
            <Form />
        </main>
    )
}
