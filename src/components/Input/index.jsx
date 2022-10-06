import "./index.css";


export const Input = ({ type, nameId, texto }) => {
    


    return (
        <div className="conteiner_input">
            <label htmlFor={nameId}>{texto}</label>
            <input 
                type={type} 
                id={nameId} 
                required 
            />
        </div>
    )
}