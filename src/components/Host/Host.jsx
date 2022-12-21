import styles from './host.module.css';

// Function to display information about a host
export const Host = ({ host }) => {
    // Split the name into first and last name
    const isSplited = host.name.split(' ');
    // Destructure the first and last name from the array
    const [name, lastName] = isSplited;

    return (
        <div className={styles.nameContainer}>
            {/* Display the first and last name */}
            <div className={styles.name}>
                <p className={styles.firstName}>{name.trim()}</p>
                <p className={styles.lastName}>{lastName.trim()}</p>
            </div>

            {/* Display the host's profile picture */}
            <img src={host.picture} alt='Auteur' className={styles.picture} />
        </div>
    );
};
