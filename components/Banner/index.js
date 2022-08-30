import { style } from '@mui/system';
import Image from 'next/image';
import styles from './styles.module.css';

const Banner = ({ albumImage, title, artist }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          style={{ backgroundImage: `url(${albumImage})` }}
          className={styles.album_container}
        ></div>
      </div>
      <div className={styles.album_info}>
        <p className={styles.album_name}>{title}</p>
        <p className={styles.album_artist}>{artist}</p>
      </div>
    </div>
  );
};

export default Banner;
