import styles from './showArrows.module.css';

import left_arrow from '../../assets/left_arrow.png';
import right_arrow from '../../assets/right_arrow.png';

// Function to display slider navigation arrows unless there is only one image
export function ShowArrows({ goToPrevious, goToNext, slides }) {
    if (slides.length <= 1) {
        return null;
    }

    return (
        <div>
            <img
                src={left_arrow}
                alt='leftArrow'
                onClick={goToPrevious}
                className={styles.leftArrow}
            ></img>
            <img
                src={right_arrow}
                alt='rightArrow'
                onClick={goToNext}
                className={styles.rightArrow}
            ></img>
        </div>
    );
}
