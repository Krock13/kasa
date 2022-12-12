import { useParams } from 'react-router-dom';
import styles from './lodging.module.css';
import { useFetch } from '../../utils/hooks/fetch';
import { ImageSlider } from '../../components/ImageSlider/ImageSlider';
import { Tags } from '../../components/Tag/Tag';
import { Rating } from '../../components/Rating/Rating';
import { Host } from '../../components/Host/Host';
import { Collapsible } from '../../components/Collapse/Collapse';

export function Lodging() {
    // Using the hook to fetch. Take as argument the address of the file or the future API.
    const { data, isLoading, error } = useFetch(`../logements.json`);
    const { id } = useParams();
    const element = data?.find(element => element.id === id);

    // Catch errors from useFetch
    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    // Destructuring props of each elements
    if (!isLoading) {
        const {
            pictures,
            title,
            location,
            tags,
            rating,
            host,
            description,
            equipments,
        } = element;

        return (
            <div className={styles.lodgingContainer}>
                <ImageSlider slides={pictures} />
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.location}>{location}</h3>
                <Tags tags={tags} className={styles.lodgingTags} />
                <div className={styles.ratingAndHost}>
                    <Rating rating={rating} />
                    <Host host={host} />
                </div>
                <div className={styles.collapsideContainers}>
                    <Collapsible styleCollapse={true} title='Description' content={description} />
                    <Collapsible styleCollapse={true} title='Équipements' content={equipments} />
                </div>
            </div>
        );
    }
}
