import { createContext, useContext, useEffect, useState } from "react";
import { usePagamentoContext } from "./Pagamentos";
import { UsuarioContext } from "./Usuario";

export const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([])
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0)
    const [valorTotalProdutos, setValorTotalProdutos] = useState(0)

    return (
        <CarrinhoContext.Provider value={{ 
            carrinho,
            setCarrinho,
            quantidadeProdutos,
            setQuantidadeProdutos,
            valorTotalProdutos,
            setValorTotalProdutos
        }}>
            { children }
        </CarrinhoContext.Provider>
    )
}

// ADICIONA E REMOVER ITENS AO CARRINHO //
export const useCarrinhoContext = () => {
    const { 
        carrinho,
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotalProdutos,
        setValorTotalProdutos
    } = useContext(CarrinhoContext)
    const { formaPagamento } = usePagamentoContext()
    const { setSaldo } = useContext(UsuarioContext)

    function adicionarProduto(produto) {
        const temProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === produto.id)
        if(!temProduto) {
            produto.quantidade = 1
            return setCarrinho(carrinho => [...carrinho, produto])
        }

        setCarrinho(mudarQuantidade(produto.id, 1))
    }

    function removerProduto(id) {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id)
        const eOUltimo = produto.quantidade === 1

        if(eOUltimo) {
            return setCarrinho(carrinho => carrinho.filter(itemDoCarrinho => itemDoCarrinho.id !== id))
        }

        setCarrinho(mudarQuantidade(id, -1))

    }

    function mudarQuantidade(id, quantidade) {
        return carrinho.map(itemDoCarrinho => {
            if(itemDoCarrinho.id === id){
                itemDoCarrinho.quantidade += quantidade
            }
            return itemDoCarrinho
        })
    }

    function efetuaCompra(){
        setCarrinho([])
        setSaldo(saldoAnterior => saldoAnterior - valorTotalProdutos)
    }

    useEffect(() => {
        const {novoTotal, novaQuantidade} = carrinho.reduce((contador, produto) => ({
            novaQuantidade: contador.novaQuantidade + produto.quantidade,
            novoTotal: contador.novoTotal + (produto.valor * produto.quantidade)
        }), {
            novaQuantidade: 0,
            novoTotal: 0
        })
        setQuantidadeProdutos(novaQuantidade)
        setValorTotalProdutos(novoTotal * formaPagamento.juros)

    },[ carrinho, setQuantidadeProdutos, setValorTotalProdutos, formaPagamento ])

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        quantidadeProdutos,
        valorTotalProdutos,
        setQuantidadeProdutos,
        efetuaCompra
    }
}

