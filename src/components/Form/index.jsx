import { Input } from "../Input"
import { InputRadio } from "../Input/inputRadio"
import { Button } from "../Button"

import "./index.css"
import { useContext } from "react"
import { Context } from "../context"


export const Form = () => {
    const context = useContext(Context)

    console.log(context)

    const handleSubmit = (e) => {
        e.preventDefault()

        context.dispatch({ type:"success"})

    }


    return (
        <form onSubmit={handleSubmit}>
            <Input type={"text"} nameId={"name"} texto={'Nome Completo'} />
            <Input type={"email"} nameId={"email"} texto={'Email'} />
            <Input type={"date"} nameId={"date"} texto={'Data de Nacimento'} />
            <Input type={"text"} nameId={"naturalidade"} texto={'Naturalidade'} />
            <Input type={"tel"} nameId={"celular"} texto={'Celular'} />
            <Input type={"tel"} nameId={"Telefone"} texto={'Telefone'} />
            <Input type={"text"} nameId={"endereco"} texto={'Endereço'} />
            <Input type={"text"} nameId={"cidade"} texto={'Cidade'} />
            <InputRadio />
            <Button />
        </form>
    )
}