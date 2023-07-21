import styles from './TotalPagamento.module.css'


function TotalPagamento({ titulo, valor = 0}){
    const valorRecebido = !isNaN(valor) ? 0: valor;

    return(
        <div className={styles.container}>
            <h2 className={styles.titulo}>{titulo}: </h2>
            <span className={styles.valor}>R$ {Number(valorRecebido).toFixed(2)}</span>
        </div>
    )
}

export default TotalPagamento;