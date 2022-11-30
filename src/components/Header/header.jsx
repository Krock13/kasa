import { Link } from 'react-router-dom';
import styles from './header.module.css';
import vector_A from '../../assets/vector_A.png';
import vector_K from '../../assets/vector_K.png';
import vector_S from '../../assets/vector_S.png';
import vector_house from '../../assets/house.png';

export function Header() {
    return (
        <header className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <img src={vector_K} alt='K'></img>
                <img className={styles.house}src={vector_house} alt='A'></img>
                <img src={vector_S} alt='S'></img>
                <img src={vector_A} alt='A'></img>
            </Link>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link to={'/'}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
