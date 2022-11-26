import styles from './tag.module.css';

const Tags = ({ tags }) => {
    return (
        <div className={styles.tagsContainers}>
            <span className={styles.tag}>{tags}</span>
        </div>
    );
};

export default Tags;
