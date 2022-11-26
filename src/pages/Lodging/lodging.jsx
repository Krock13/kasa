import { useParams } from 'react-router-dom';
import styles from './lodging.module.css';
import { useFetch } from '../../utils/hooks/hooks';
import ImageSlider from '../../components/ImageSlider/imageSlider';

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
                        <ImageSlider
                            key={`${logement.id}-${index}`}
                            slides={logement.pictures}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Lodging;
