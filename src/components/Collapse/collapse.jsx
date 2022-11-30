import { useState } from 'react';
import styles from './collapse.module.css';
import down_arrow from '../../assets/down_arrow.png';
import up_arrow from '../../assets/up_arrow.png';

export const Collapsible = ({ title, content }) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.collapse}>
            <button onClick={toggle} className={styles.button}>
                {title}
                {open ? (
                    <img src={up_arrow} alt='' className={styles.arrow}/>
                ) : (
                    <img src={down_arrow} alt='' className={styles.arrow}/>
                )}
            </button>
            {open && (
                <div
                    className={open ? styles.contentShow : styles.contentParent}
                >
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
