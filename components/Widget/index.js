import Image from 'next/image';

import styles from './styles.module.css';

const Widget = ({ icon, type, title }) => {
  return (
    <div className={styles.widget__container}>
      <div className={styles.widget__wrapper}>
        {icon && (
          <Image
            src={`/icons/${icon}`}
            alt="alt-icon"
            width={28}
            height={28}
            layout="fixed"
          />
        )}
        <div className={styles.widget__content}>
          <p className={styles.widget_type}>{type.toUpperCase()}</p>
          <p className={styles.widget_title}>{title.toUpperCase()}</p>
        </div>
        {!icon && (
          <Image
            src="/icons/wave-sound.png"
            alt="alt-icon"
            width={28}
            height={28}
            layout="fixed"
          />
        )}
      </div>
      {!icon && <span className={styles.widget__status}></span>}
    </div>
  );
};

export default Widget;
