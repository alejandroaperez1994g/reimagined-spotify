import Image from 'next/image';
import Link from 'next/link';
import Widget from '../Widget';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar__container}>
      <div className={styles.navigation__arrows}>
        <Image
          src="/icons/left-arrow.png"
          alt="arrow-left"
          width={28}
          height={28}
          layout="fixed"
        />
        <Image
          src="/icons/right-arrow.png"
          alt="arrow-left"
          width={28}
          height={28}
          layout="fixed"
        />
      </div>
      <div className={styles.widgets__wrapper}>
        <Widget title="Daft Punk Album Streaming" type="Event" />
        <Widget title="Remote Play" type="Party" icon="dj.png" />
      </div>
    </div>
  );
};

export default Navbar;
