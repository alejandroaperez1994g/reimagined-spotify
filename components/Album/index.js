import Image from 'next/image';
import styles from './styles.module.css';

const Album = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.album_picture}>
          <Image
            className={styles.album}
            src={props.album.images[0].url}
            alt={props.name}
            width={24}
            height={24}
            layout="responsive"
          />
        </div>

        <p className={styles.album_title}>{props.album.name}</p>
        <p className={styles.artist_name}>{props.album.artists[0].name}</p>
      </div>
    </>
  );
};

export default Album;
