import styles from './tag.module.css';

// Tags from destructuring props of Lodging page
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
