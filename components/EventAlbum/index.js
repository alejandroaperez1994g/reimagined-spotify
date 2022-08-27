import Image from 'next/image';
import styles from './styles.module.css';

const EventAlbum = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.event_album_picture}
        src="https://i.ibb.co/RjgQ4j5/RAM-Daft-Punk.jpg"
        alt="album-image"
        width={250}
        height={250}
        layout="fixed"
      />
      <p className={styles.album_title}>Random Access Memories</p>
      <p className={styles.album_artist}>By Artist</p>
      <p className={styles.album_description}>
        Daft Punk promotionates their last album, Random Access Memories
      </p>
    </div>
  );
};

export default EventAlbum;
