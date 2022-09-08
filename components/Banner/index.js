import { style } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const Banner = ({ albumImage, title, artist, id }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          style={{ backgroundImage: `url(${albumImage})` }}
          className={styles.album_container}
        ></div>
      </div>
      <div className={styles.album_info}>
        <Link href={`/album/${id}`}>
          <p className={styles.album_name}>{title}</p>
        </Link>

        <p className={styles.album_artist}>{artist}</p>
      </div>
    </div>
  );
};

export default Banner;
