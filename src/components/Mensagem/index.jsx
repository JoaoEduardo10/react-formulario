import "./index.css"


export const Mensagem = ({ type, text }) => {
    return (
        <div className={`mensagem ${type}`}>
            <p>{text}</p>
        </div>
    )
}