import styles from './tag.module.css';

export const Tags = ({ tags }) => {
    return (
        <div className={styles.tagsContainers}>
            <span className={styles.tag}>{tags}</span>
        </div>
    );
};
