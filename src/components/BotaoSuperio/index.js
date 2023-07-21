import { useNavigate } from 'react-router-dom';
import styles from './BotaoSuperior.module.css'

function BotaoSuperior({ children, navegar , absoluto = false, valor = '' }){
    const navigate = useNavigate()

    return(       
            <button 
                className={`
                    ${styles.botao} 
                    ${absoluto ? styles.botao__absolute : ''}
                `} 
                onClick={() => navigate(navegar) }
            >

                {children}              
            </button>      
    )
}

export default BotaoSuperior;