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
                <img
                    src={banner}
                    alt='bannière'
                    className={styles.banner}
                ></img>
            </div>
            {/* Body */}
            <div className={styles.collapsibleContainer}>
                <div>
                    {/* Display a Collapsible component for each element of aboutData */}
                    <Collapsible
                        styleLodging={false}
                        title='Fiabilité'
                        content={aboutData.fiabilite}
                    />
                    <Collapsible
                        styleLodging={false}
                        title='Respect'
                        content={aboutData.respect}
                    />
                    <Collapsible
                        styleLodging={false}
                        title='Service'
                        content={aboutData.service}
                    />
                    <Collapsible
                        styleLodging={false}
                        title='Sécurité'
                        content={aboutData.securite}
                    />
                </div>
            </div>
        </div>
    );
}
