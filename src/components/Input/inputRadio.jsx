import "./index.css"

export const InputRadio = ({ nameId, texto, type}) => {
    return (
        <div className="conteiner_inputRadio">
            <label htmlFor={"raido"}>Sexo</label>
            <div className="div_form">
                <div className="radios">
                    <input type={"radio"} name={'radio'} id={'masculino'} checked/>
                    <label htmlFor="maculino">Maculino</label>
                </div>
                <div className="radios">
                    <input type={"radio"} name={'radio'} id={"feminino"} />
                    <label htmlFor="maculino">Maculino</label>
                </div>
                <div className="radios">
                    <input type={"radio"} name={'radio'} id={"outros"} />
                    <label htmlFor="maculino">Outros</label>
                </div>
            </div>
        </div>
    )
}