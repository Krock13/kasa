import { useParams } from 'react-router-dom';
import styles from './lodging.module.css';
import { useFetch } from '../../utils/hooks/hooks';
import ImageSlider from '../../components/ImageSlider/imageSlider';
import Tags from '../../components/Tag/tag';

function Lodging() {
    const { data, isLoading, error } = useFetch(`../logements.json`);
    const { id } = useParams();
    const element = id => data?.find(element => element.id === id);
    const object = [element(id)];

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <div className={styles.loadgingContainer}>
            {isLoading ? (
                <div className={styles.loaderWrapper}>
                    <div className={styles.loader} />
                </div>
            ) : (
                <div>
                    {object.map((logement, index) => (
                        <div key={`${logement.id}-${index}`}>
                            <ImageSlider slides={logement.pictures} />
                            <h2 className={styles.title}>{logement.title}</h2>
                            <h3 className={styles.location}>
                                {logement.location}
                            </h3>
                            <div className={styles.lodgingTags}>
                                {logement.tags.map((tags, index) => (
                                    <div key={`${tags.id}-${index}`}>
                                        <Tags tags={tags} />
                                    </div>
                                ))}
                            </div>
                            <div>rating</div>
                            <div>host name</div>
                            <div>host picture</div>
                            <div>description</div>
                            <div>equipements</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Lodging;
