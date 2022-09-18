import Image from 'next/image';
import {useRouter} from 'next/router';

import styles from './styles.module.css';
import Link from 'next/link';

const Sidebar = () => {
const router = useRouter()


  const handleNavigation = ({target}) => {
      router.push(`/${target.alt}`)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
        onClick={()=>router.push("/")}
          src="https://i.ibb.co/GxXwBpS/spotify-logo.png"
          alt="home"
          width={41}
          height={40}
          layout="fixed"
          aria-label="Logo"
        />
        {/* </Link> */}
      </div>
      <div className={styles.nav__items}>
        <Image
          className={styles.icon}
          src="/icons/search.png"
          alt="albums"
          width={40}
          height={40}
          layout="fixed"
        />

        <Image
        onClick={(e)=>handleNavigation(e)}
        defaultValue="albums"
          className={styles.icon}
          src="/icons/disc.png"
          alt="albums"
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
