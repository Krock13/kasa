import { useState } from 'react';
import styles from './collapse.module.css';

import down_arrow from '../../assets/down_arrow.png';
import up_arrow from '../../assets/up_arrow.png';

// Title and content from destructuring props of Lodging page or About page
export const Collapsible = ({ title, content, styleLodging }) => {
    const [open, setOpen] = useState(false);
    // Reverse open/close
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.collapse}>
            {/* Button to open/close the collapse */}
            <button onClick={toggle} className={styleLodging ? styles.button : styles.buttonAbout}>
                {title}
                {open ? (
                    <img src={up_arrow} alt='up_arrow' className={styles.arrow} />
                ) : (
                    <img src={down_arrow} alt='down_arrow' className={styles.arrow} />
                )}
            </button>
            {/* Content of the collapse */}
            {open && (
                <div className={styleLodging ? styles.contentShow : styles.contentShowAbout}>
                    {/* Makes a difference if the content is a array or a paragraph */}
                    {Array.isArray(content) ? (
                        <ul className={styleLodging ? styles.content : styles.contentAbout}>
                            {content.map((equipments, index) => (
                                <li key={index}>{equipments}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styleLodging ? styles.content : styles.contentAbout}>
                            {content}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};
