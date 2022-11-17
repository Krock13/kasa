import styles from './thumb.module.css'

function Thumb() {
    return (
        <div className={styles.thumb}>
            <div className={styles.rectangle}></div>
            <img
                className={styles.img}
                // src='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg'
                alt=''
            ></img>
            <h3 className={styles.title}>Titre de la location</h3>
        </div>
    )
}

export default Thumb
