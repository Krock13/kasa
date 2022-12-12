import styles from './host.module.css';

// Host from destructuring props of Lodging page
export const Host = ({ host }) => {
    // Split host.name in name, lastName
    const isSplited = host.name.split(' ');
    const [name, lastName] = isSplited;

    return (
        <div className={styles.nameContainer}>
            <div className={styles.name}>
                {/* trim() remove the blanks at the beginning and end of the chain */}
                <p className={styles.firstName}>{name.trim()}</p>
                <p className={styles.lastName}>{lastName.trim()}</p>
            </div>

            <img src={host.picture} alt='Auteur' className={styles.picture} />
        </div>
    );
};
