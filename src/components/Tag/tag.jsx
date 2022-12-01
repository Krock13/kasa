import styles from './tag.module.css';

export const Tags = ({ tags }) => {
    return (
        <div className={styles.tagsContainers}>
            {tags.map((tags, index) => (
                <div key={`${tags.id}-${index}`} className={styles.lodgingTags}>
                    <span className={styles.tag}>{tags}</span>
                </div>
            ))}
        </div>
    );
};
