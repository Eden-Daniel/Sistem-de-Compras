import styles from './CompraEfetuada.module.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function BarraCompraEfetuada({ compraEfetuada }){
    return (
        <div className={` ${styles.container} ${compraEfetuada ? styles.visivel : ''}`}>
            <AiOutlineCheckCircle size={30} color='lightgreen' />
            Compra efetuada com sucesso.
        </div>
    )
}

export default BarraCompraEfetuada;