import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { useRouter } from 'next/router';

const Album = ({ album }) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.card}>
        <div className={styles.album_picture}>
          <Image
            className={styles.album}
            src={album.images[0].url}
            alt={album.name}
            width={24}
            height={24}
            layout="responsive"
          />
        </div>

        <Link
          href={router.asPath === '/search' ? '#' : `/album/${album.id}`}
          shallow={true}
        >
          <p className={styles.album_title}>{album.name}</p>
        </Link>

        <p className={styles.artist_name}>{album.artists[0].name}</p>
      </div>
    </>
  );
};

export default Album;
