import { useState } from 'react';
import styles from './imageSlider.module.css';

import left_arrow from '../../assets/left_arrow.png';
import right_arrow from '../../assets/right_arrow.png';

// Slides from destructuring props of Lodging page
export const ImageSlider = ({ slides }) => {
    // Function to display slider navigation arrows unless there is only one image
    function ShowArrows() {
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

    // Using useState for the current image
    const [currentIndex, setCurrentIndex] = useState(0);
    // Previous image function
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    // Next picture function
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    // Starting image => index[0]
    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    };

    const photo = slides[currentIndex];

    return (
        <div className={styles.imageSliderContainer}>
            <ShowArrows />
            <img src={photo} alt='img' className={styles.pictures}></img>
            <div className={styles.rectangle}></div>
            <div>
                {slides.map((pictures, slideIndex) => {
                    return (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};
