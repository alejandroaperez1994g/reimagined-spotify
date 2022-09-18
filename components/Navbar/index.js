import Image from 'next/image';
import Widget from '../Widget';
import { useRouter } from 'next/router'

import styles from './styles.module.css';

const Navbar = () => {
  const router = useRouter()


  const handleBackNavigation = () => {
    router.back()
  }

  return (
    <div className={styles.navbar__container}>
      <div className={styles.navigation__arrows}>
        <Image
        onClick={handleBackNavigation}
        className={styles.navigation_button}
          src="/icons/left-arrow.png"
          alt="arrow-left"
          width={28}
          height={28}
          layout="fixed"
        />
        {/* <Image
        className={styles.navigation_button}
          src="/icons/right-arrow.png"
          alt="arrow-left"
          width={28}
          height={28}
          layout="fixed"
        /> */}
      </div>
      <div className={styles.widgets__wrapper}>
        <Widget title="Daft Punk Album Streaming" type="Event" />
        <Widget title="Remote Play" type="Party" icon="dj.png" />
      </div>
    </div>
  );
};

export default Navbar;
