import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import styles from './styles.module.css';

const MusicPlayer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.player_info}>
        <Image
          className={styles.album_image}
          src="https://i.ibb.co/RjgQ4j5/RAM-Daft-Punk.jpg"
          alt="album_image"
          width={50}
          height={48}
          layout="fixed"
        />
        <div className={styles.information}>
          <p className={styles.current_song}>Title</p>
          <p className={styles.artist_info}>Artist</p>
        </div>
      </div>
      <div className={styles.player_controls}>
        <IconButton>
          <PlayCircleIcon fontSize="large" sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <WhatshotIcon fontSize="large" sx={{ color: 'white' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default MusicPlayer;
