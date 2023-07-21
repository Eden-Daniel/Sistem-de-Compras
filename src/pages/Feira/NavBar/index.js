import { useCarrinhoContext } from "common/context/Carrinho"
import style from "./NavBar.module.css"
import icone from './icon_vegetable.png'
import { PiShoppingCartDuotone } from "react-icons/pi"
import BotaoSuperior from "components/BotaoSuperio"

function NavBar() {
    const { quantidadeProdutos } = useCarrinhoContext() 

    return (
        <nav className={style.container}>
            <img src={icone} alt="Ícone de uma caixa de madeira com varios legumes." />
            <BotaoSuperior valor={quantidadeProdutos} navegar='/carrinho' >
                <PiShoppingCartDuotone size={35} />
                <span>{quantidadeProdutos}</span>
            </BotaoSuperior>           
        </nav>
    )
}

export default NavBar;