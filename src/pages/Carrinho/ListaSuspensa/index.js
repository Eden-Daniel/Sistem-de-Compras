import style from './ListaSuspensa.module.css'
import { usePagamentoContext } from "common/context/Pagamentos";

function ListaSuspensa({ label }) {
    const { tiposDePagamentos, formaPagamento, mudarFormaDePagamento } = usePagamentoContext()

    console.log(formaPagamento)
    return(
            <div className={style.container}>
                <label>{label}</label>
                <select 
                    value={formaPagamento.id}
                    className={style.lista}                    
                    onChange={(evento) => mudarFormaDePagamento(evento.target.value)}
                    >
                    <option value='' disabled selected>Selecione um Forma de Pagamento</option>
                    {tiposDePagamentos.map(pagamento => (
                    <option value={pagamento.id} key={pagamento.id}>{pagamento.nome}</option>)
                    )}
                </select>
            </div>  
    )
}

export default ListaSuspensa;