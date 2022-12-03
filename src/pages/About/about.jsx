import styles from './about.module.css';
import banner from '../../assets/banner_about.png';
import { Collapsible } from '../../components/Collapse/Collapse';

// Import paragraphs from a separate file in order to keep clean code.
import { aboutData } from './aboutData';

export function About() {
    return (
        <div className={styles.aboutContainer}>
            {/* Banner */}
            <div className={styles.bannerContainer}>
                <img src={banner} alt='' className={styles.banner}></img>
            </div>
            {/* Body */}
            <div className={styles.collapsibleContainer}>
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
