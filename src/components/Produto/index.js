import { useCarrinhoContext } from "../../common/context/Carrinho";
import style from "./Produto.module.css"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"

function Produto({ nome, foto, id, valor }) {
    const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext()
    const produtoNoCarrinho = carrinho.find(itenDoCarrinho => itenDoCarrinho.id === id)

    return (
        <div className={style.container}>
            <div className={style.produto}>
                <img src={`assets/${foto}.png`} alt={nome} />
                <p>{nome} - R$ {valor.toFixed(2)} Kg</p>
            </div>
            <div className={style.interacao}>
                <button disabled={!produtoNoCarrinho} 
                        onClick={() => removerProduto(id)}                 
                >
                    <AiOutlineMinusCircle 
                        color="red" 
                        size={21}                               
                    />
                </button>

                <p>{produtoNoCarrinho?.quantidade || 0}</p>

                <button
                    onClick={() => adicionarProduto({ nome, foto, id, valor })}                
                >
                    <AiOutlinePlusCircle 
                    color="green" 
                    size={21}
                    />
                </button>
            </div>
        </div>
    )
}

export default Produto;