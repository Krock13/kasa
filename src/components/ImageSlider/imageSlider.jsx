import { useState } from 'react';
import styles from './imageSlider.module.css';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

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
                    src={leftArrow}
                    alt='leftArrow'
                    onClick={goToPrevious}
                    className={styles.leftArrow}
                ></img>
                <img
                    src={rightArrow}
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
