import styles from './tag.module.css';

// Function to display a list of tags
export const Tags = ({ tags }) => {
    return (
        <div className={styles.tagsContainers}>
            {/* Map over the tags and display each one in a separate container */}
            {tags.map((tags, index) => (
                <div key={`${tags.id}-${index}`} className={styles.lodgingTags}>
                    <span className={styles.tag}>{tags}</span>
                </div>
            ))}
        </div>
    );
};
