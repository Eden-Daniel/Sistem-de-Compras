import { useContext } from 'react';
import Produto from 'components/Produto';
import style from './Feira.module.css'
import NavBar from "./NavBar";
import feira from "./feira.json"
import { UsuarioContext } from 'common/context/Usuario';


function Feira() {
    const {nome, saldo} = useContext(UsuarioContext)

    return (
        <div className={style.container}>
            <NavBar />
            <div>
                <div className={style.dados_usuario}>
                    <h2> Olá: {nome} </h2>
                    <h2> Saldo: R${Number(saldo).toFixed(2)} </h2>
                </div>
                <h3> Encontre os melhores produtos orgânicos! </h3>
            </div>
            <div>
                <h2>Produtos:</h2>
                <div>
                    {feira.map(produto => (
                        <Produto {...produto} key={produto.id} />
                    ))}                    
                </div>
            </div>
        </div>
    )
}

export default Feira;