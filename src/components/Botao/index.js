import style from "./Botao.module.css"

function Botao({ children, desativa, clicque }) {
    
    return (
        <button 
        disabled={desativa}             
        className={`
            ${style.botao}
            ${desativa ? style.desativado : ""}
        `}  
        onClick={() => { clicque() } }
        
    >
        { children }
    </button>
    )
}

export default Botao;