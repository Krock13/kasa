import { useState } from 'react';
import styles from './collapse.module.css';

import down_arrow from '../../assets/down_arrow.png';
import up_arrow from '../../assets/up_arrow.png';

// Title and content from destructuring props of Lodging page or About page
export const Collapsible = ({ title, content }) => {
    const [open, setOpen] = useState(false);
    // Reverse open/close
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.collapse}>
            {/* Button to open/close the collapse */}
            <button onClick={toggle} className={styles.button}>
                {title}
                {open ? (
                    <img src={up_arrow} alt='' className={styles.arrow} />
                ) : (
                    <img src={down_arrow} alt='' className={styles.arrow} />
                )}
            </button>
            {/* Content of the collapse */}
            {open && (
                <div
                    className={open ? styles.contentShow : styles.contentParent}
                >
                    {/* Makes a difference if the content is a array or a paragraph */}
                    {Array.isArray(content) ? (
                        <ul className={styles.content}>
                            {content.map((equipments, index) => (
                                <li key={index}>{equipments}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styles.content}>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
};
