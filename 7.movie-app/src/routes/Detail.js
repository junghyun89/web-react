import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  });
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movie__info}>
          <img src={movie.medium_cover_image} className={styles.movie__img} />
          <h2>
            {movie.title} ({movie.year})
          </h2>
          <div>{movie.rating}점</div>
          <hr></hr>
          <div className={styles.movie__description}>
            {movie.description_full}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
