import { useState } from 'react';
import styles from './imageSlider.module.css';

import { ShowArrows } from '../../components/ShowArrows/ShowArrows';

// Slides from destructuring props of Lodging page
export const ImageSlider = ({ slides }) => {
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
            <ShowArrows
                goToPrevious={goToPrevious}
                goToNext={goToNext}
                slides={slides}
            />
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
