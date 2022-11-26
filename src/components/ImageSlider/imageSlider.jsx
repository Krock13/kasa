import { useState } from 'react';
import styles from './imageSlider.module.css';

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

    const photo = slides[currentIndex]

    return (
        <div className={styles.imageSliderContainer}>
            <div>
                <div onClick={goToPrevious} className={styles.leftArrow}>
                    ❰
                </div>
                <div onClick={goToNext} className={styles.rightArrow}>
                    ❱
                </div>
            </div>
            <img src={photo} alt='img' className={styles.pictures} ></img>
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
