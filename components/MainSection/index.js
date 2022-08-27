import Image from 'next/image';
import EventAlbum from '../EventAlbum';
import EventInfo from '../EventInfo';
import styles from './styles.module.css';

const MainSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.album_info}>
        <EventInfo eventTitle="Daft Punk" />
        <EventAlbum />
      </div>
      <div className={styles.album_users}>
        <p className={styles.aditional_text}>
          <Image
            className={styles.group_avatars}
            src="https://i.ibb.co/GxXwBpS/spotify-logo.png"
            alt="group_avatars"
            width={34}
            height={34}
            layout="fixed"
          />
          Exclusive
        </p>
        <Image
          src="https://i.ibb.co/pzTSmb8/Group-1.png"
          alt="group_avatars"
          width={500}
          height={500}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default MainSection;
