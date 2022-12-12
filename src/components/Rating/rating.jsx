import styles from './rating.module.css';

import red_star from '../../assets/red_star.png';
import grey_star from '../../assets/grey_star.png';

// Rating from destructuring props of Lodging page
export const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className={styles.ratingContainer}>
            {/* Determine the number of red stars out of 5 */}
            {stars.map(star =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        src={red_star}
                        alt='red_star'
                        className={styles.rating}
                    />
                ) : (
                    <img
                        key={star.toString()}
                        src={grey_star}
                        alt='grey_star'
                        className={styles.rating}
                    />
                ),
            )}
        </div>
    );
};
