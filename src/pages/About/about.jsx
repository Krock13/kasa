import styles from './about.module.css';
import { Collapsible } from '../../components/Collapse/Collapse';

import banner from '../../assets/banner_about.png';

// Import paragraphs from a separate file in order to keep clean code.
import { aboutData } from './aboutData';

export function About() {
    return (
        <div className={styles.aboutContainer}>
            {/* Banner */}
            <div className={styles.bannerContainer}>
                <img src={banner} alt='bannière' className={styles.banner}></img>
            </div>
            {/* Body */}
            <div className={styles.collapsibleContainer}>
                {aboutData.map((data, index) => {
                    return (
                        <div key={index}>
                            <Collapsible
                                styleCollapse={false}
                                title='Fiabilité'
                                content={data.fiabilite}
                            />
                            <Collapsible
                                styleCollapse={false}
                                title='Respect'
                                content={data.respect}
                            />
                            <Collapsible
                                styleCollapse={false}
                                title='Service'
                                content={data.service}
                            />
                            <Collapsible
                                styleCollapse={false}
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
