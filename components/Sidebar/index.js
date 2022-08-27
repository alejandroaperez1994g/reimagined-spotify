import Image from 'next/image';

import styles from './styles.module.css';

const Sidebar = () => {
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
          className={styles.icon}
          src="/icons/search.png"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <Image
          className={styles.icon}
          src="/icons/disc.png"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <Image
          className={styles.icon}
          src="/icons/mic.png"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <Image
          className={styles.icon}
          src="/icons/dj.png"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <Image
          className={styles.icon}
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

export default Sidebar;
