import styles from './rating.module.css';
import red_star from '../../assets/red_star.png';
import grey_star from '../../assets/grey_star.png';

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className={styles.ratingContainer}>
            {stars.map(star =>
                rating >= star ? (
                    <img key={star.toString()} src={red_star} alt='' className={styles.rating}/>
                ) : (
                    <img key={star.toString()} src={grey_star} alt='' className={styles.rating}/>
                ),
            )}
        </div>
    );
};

export default Rating;
