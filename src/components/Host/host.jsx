import styles from './host.module.css';

export const Host = ({ host }) => {
    const isSplited = host.name.split(' ');
    const [name, lastName] = isSplited;

    return (
        <div className={styles.nameContainer}>
            <div className={styles.name}>
                <p className={styles.firstName}>{name.trim()}</p>
                <p className={styles.lastName}>{lastName.trim()}</p>
            </div>

            <img src={host.picture} alt='Auteur' className={styles.picture} />
        </div>
    );
};
