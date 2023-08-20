import Styles from './Dados.module.css';
import Navbar from'../components/Navbar/Navbar';
import CsvSelector from '../components/CsvSelector/CsvSelector';

function Dados(props) {
    return (

        <div className={Styles.back}>

            <h1 className={Styles.header}>Página de Acesso - {props.situação}</h1>
            <div><Navbar/></div>
            <div><CsvSelector/></div>

        </div>

    )
}

export default Dados
