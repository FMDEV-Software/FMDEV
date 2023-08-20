import {Route, Routes, Link} from 'react-router-dom'
import Navbar from'../components/Navbar/Navbar';
import CsvSelector from '../components/CsvSelector/CsvSelector';
import Styles from './CsvHolder.module.css'

function CsvHolder(props) {
    return(
        <nav className={Styles.body}>
            <h1 className={Styles.header}>{props.tipo}</h1>
            <Navbar/>
            <Link to="/dados" className={Styles.voltar}>Voltar</Link>
            <div className={Styles.container}>***Dados aqui***</div>

            <Routes>
                <Route path="/dados" element={<CsvSelector/>}/>
            </Routes>
        </nav>
    )
}

export default CsvHolder
