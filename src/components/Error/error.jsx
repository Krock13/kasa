import { Link } from 'react-router-dom';
import styles from './error.module.css';

function Error() {
    return (
        <div className={styles.errorContainer}>
            <h2 className={styles.titre}>404</h2>

            <p className={styles.error}>
                Oups! La page que <br />
                vous demandez n'existe pas.
            </p>

            <Link to={`./`} className={styles.redirection}>
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default Error;
