import styles from './card.module.css';

// Title and picture from destructuring props of Home page
export function Card({ title, picture }) {
    return (
        <div className={styles.card}>
            <img src={picture} alt='img'></img>
            <div className={styles.rectangle}></div>
            <span>{title}</span>
        </div>
    );
}
