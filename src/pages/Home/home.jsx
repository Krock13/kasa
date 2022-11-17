import styles from './home.module.css';
import Banner from '../../components/Banner/banner';
import Thumb from '../../components/Thumb/thumb';

function Home() {
    return (
        <div className={styles.gallery}>
            <Banner></Banner>
            <Thumb></Thumb>
        </div>
    );
}

export default Home;
