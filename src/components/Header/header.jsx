import styles from './header.module.css';
import vector_A from '../../assets/vector_A.png';
import vector_K from '../../assets/vector_K.png';
import vector_S from '../../assets/vector_S.png';
import vector_house from '../../assets/house.png';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={vector_K} alt='K'></img>
                <img className={styles.house}src={vector_house} alt='A'></img>
                <img src={vector_S} alt='S'></img>
                <img src={vector_A} alt='A'></img>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <a href='lien'>accueil</a>
                    </li>
                    <li>
                        <a href='lien'>a propos</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
