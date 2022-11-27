import { useState } from 'react';
import styles from './imageSlider.module.css';
import left_arrow from '../../assets/left_arrow.png';
import right_arrow from '../../assets/right_arrow.png';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    };

    const photo = slides[currentIndex];

    return (
        <div className={styles.imageSliderContainer}>
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

export default ImageSlider;
