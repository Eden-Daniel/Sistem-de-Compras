import { createContext, useContext, useState } from "react";

export const PagamentoContext = createContext()
PagamentoContext.displayName = "Pagamento"

export const PagamentoProvider = ({ children }) => {
    const tiposDePagamentos = [{
            nome: "Boleto",
            juros: 1,
            id: 1
        }, {
            nome: "Cartão de Creditos",
            juros: 1.2,
            id: 2
        },
        {
            nome: "PIX",
            juros: 1,
            id: 3
        },
        {
            nome: "Crediário",
            juros: 1.5,
            id: 4
        }     
    ]
    const [formaPagamento, setFormaPagamento] = useState(tiposDePagamentos)

    return (
        <PagamentoContext.Provider value={{ 
            tiposDePagamentos,
            formaPagamento, 
            setFormaPagamento
        }}>
            {children}
        </PagamentoContext.Provider> 
    )
}

export const usePagamentoContext = () => {
    const { tiposDePagamentos, formaPagamento, setFormaPagamento } = useContext(PagamentoContext)

    function mudarFormaDePagamento(id){   
       
        const pagamentoAatual = tiposDePagamentos.find(pagamento => pagamento.id === Number(id))
        setFormaPagamento(pagamentoAatual)
    }

    return {
        tiposDePagamentos,
        formaPagamento,   
        mudarFormaDePagamento 
    }
}