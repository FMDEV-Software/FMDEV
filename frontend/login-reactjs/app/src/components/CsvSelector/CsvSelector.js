import {Link} from 'react-router-dom'
import Styles from './CsvSelector.module.css'

function CsvSelector() {
    return (
        <nav className={Styles.container}>
            <Link to="/dados/alunos" className={Styles.selector}>Alunos</Link>
            <Link to="/dados/tccs" className={Styles.selector}>TCC's</Link>
            <Link to="/dados/artigos" className={Styles.selector}>Artigos Científicos</Link>
            <Link to="/dados/professores" className={Styles.selector}>Professores</Link>
        </nav>
    )
}

export default CsvSelector
