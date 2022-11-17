import styles from './card.module.css';

function Card({ title, picture }) {
    return (
        <div className={styles.card}>
            <img src={picture} alt='img'></img>
            <div className={styles.rectangle}></div>
            <span>{title}</span>
        </div>
    );
}

export default Card;