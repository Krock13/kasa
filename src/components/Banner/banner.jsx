import styles from './banner.module.css';
import banner from '../../assets/banner.png';

function Banner() {
    return (
        <section className={styles.banner}>
            <img src={banner} alt='paysage'></img>
            <h1>Chez vous,<br /> partout et ailleurs</h1>
        </section>
    );
}

export default Banner;
