import style from "./Carrinho.module.css"
import ListaSuspensa from "./ListaSuspensa";
import { BsArrowLeft } from "react-icons/bs"
import { useCarrinhoContext } from "common/context/Carrinho";
import Produto from "components/Produto"
import TotalPagamento from "./TotalPagamento";
import Botao from "components/Botao";
import BotaoSuperior from "components/BotaoSuperio";
import { useContext, useMemo, useState, } from "react";
import { UsuarioContext } from "common/context/Usuario";
import BarraCompraEfetuada from "./BarraCompraEfetuada";


    function Carrinho(){
        const { carrinho, efetuaCompra,  valorTotalProdutos = 0 } = useCarrinhoContext()
        const { saldo = 0} = useContext(UsuarioContext)
        const total = useMemo(() => saldo - valorTotalProdutos, [saldo, valorTotalProdutos])
        const [ compraEfetuada, setCompraEfetuada] = useState(false)

        function comprar() {
            efetuaCompra() 
            setCompraEfetuada(true)      
        }

        function valorSuficiente(total){
            if(total <= 0 || carrinho.length === 0){
                return true
            }
            return false
        }

        return (
            <div className={style.container}>
                <div className={style.carrinho}>                 
                    <BotaoSuperior absoluto={true} navegar={-1}>
                        <BsArrowLeft size={32} />
                    </BotaoSuperior>                                      
                    <h2 className={style.titulo}>Carrinho</h2>

                    {carrinho.map(produto => (
                            <Produto {...produto} key={produto.id} />
                    ))}

                    <div>
                        <ListaSuspensa label="Formas de Pagamento" />
                    </div>
                </div>
                <div className={style.valores}>
                    <TotalPagamento titulo="Total no Carrinho" valor={valorTotalProdutos} />
                    <TotalPagamento titulo="Saldo" valor={saldo} />
                    <TotalPagamento titulo="Saldo Total" valor={total} />
                </div>
                <Botao clicque={comprar} desativa={valorSuficiente(total)}>
                    Comprar
                </Botao>  
                <BarraCompraEfetuada compraEfetuada={compraEfetuada} />
         </div>
        )
    }

    export default Carrinho;