import { Link } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/hooks';
import Card from '../../components/Card/card';
import styles from './home.module.css';
import banner from '../../assets/banner.png';

function Home() {
    const { data, error } = useFetch(`./logements.json`);

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <div className={styles.gallery}>
            <section className={styles.banner}>
                <img src={banner} alt='paysage'></img>
                <h1>
                    Chez vous,
                    <br /> partout et ailleurs
                </h1>
            </section>
            <section className={styles.thumb}>
                {data.map((logement, index) => (
                    <article key={`${logement.id}-${index}`}>
                        <Link to={`/lodging/${logement.id}`}>
                            <Card
                                picture={logement.cover}
                                title={logement.title}
                            />
                        </Link>
                    </article>
                ))}
            </section>
        </div>
    );
}

export default Home;
