import { useContext } from "react";
import style from "./Login.module.css"
import { UsuarioContext } from "common/context/Usuario";
import Botao from "components/Botao";
import { useNavigate } from "react-router-dom";

function Login() {
    const navegate = useNavigate()
    const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext)

    const quandoClicado = () => {
        navegate('/feira')
    }

    function quantidadeDeLetrasDoNome(nome){
        if(nome.length < 4){
            return true
        }
        return false
    }

    return (
        <div className={style.container}>
            <h1>Insira o seu nome</h1>
            <div className={style.container_input}>
                <label>Nome:</label>
                <input 
                    type="text" 
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                />
            </div>
            <div className={style.container_input}>
                <label>Saldo R$:</label>
                <input 
                    type="number"
                    value={saldo}
                    onChange={(evento) => setSaldo(evento.target.value)}
                />
            </div>
            <Botao clicque={quandoClicado} desativa={quantidadeDeLetrasDoNome(nome)}>
                Avançar
            </Botao>          
        </div>
    )
}

export default Login;