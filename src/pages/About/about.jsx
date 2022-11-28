import styles from './about.module.css';
import banner from '../../assets/banner_about.png';
import { aboutData } from './aboutData';
import Collapsible from '../../components/Collapse/collapse';

function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.bannerContainer}>
                <img src={banner} alt='' className={styles.banner}></img>
            </div>
            <div>
                {aboutData.map((data, index) => {
                    return (
                        <div key={index}>
                            <Collapsible
                                title='Fiabilité'
                                content={data.fiabilite}
                            />
                            <Collapsible
                                title='Respect'
                                content={data.respect}
                            />
                            <Collapsible
                                title='Service'
                                content={data.service}
                            />
                            <Collapsible
                                title='Sécurité'
                                content={data.securite}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default About;
