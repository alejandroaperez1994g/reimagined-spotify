import Image from 'next/image';
import Button from '@mui/material/Button';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="https://i.ibb.co/GxXwBpS/spotify-logo.png"
          alt="logo"
          width={41}
          height={40}
          layout="fixed"
        />
      </div>
      <div className={styles.nav__items}>
        <Image
          src="/icons/search.png"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <Image
          src="/icons/disc.png"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <Image
          src="/icons/mic.png"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <Image
          src="/icons/dj.png"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <Image
          src="/icons/album.png"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default Navbar;
