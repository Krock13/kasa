import { Link } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/fetch';
import { Card } from '../../components/Card/Card';
import styles from './home.module.css';
import banner from '../../assets/banner.png';

export function Home() {
    const { data, error } = useFetch(`./logements.json`);

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <div className={styles.homeContainer}>
            <section className={styles.banner}>
                <img src={banner} alt='paysage'></img>
                <div className={styles.spanContainer}>
                    <span className={styles.span1}>Chez vous, </span>
                    <span className={styles.span2}>partout et ailleurs</span>
                </div>
            </section>
            <section className={styles.thumb}>
                <div className={styles.cardContainer}>
                    {data.map((logement, index) => (
                        <div
                            className={styles.cardCalc}
                            key={`${logement.id}-${index}`}
                        >
                            <Link to={`/lodging/${logement.id}`}>
                                <Card
                                    picture={logement.cover}
                                    title={logement.title}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
