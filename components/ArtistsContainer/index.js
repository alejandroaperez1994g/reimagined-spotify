import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

const ArtistsContainer = ({ artists }) => {
  // [0].images[0].url
  console.log(artists.length);
  return (
    <div
      className={
        artists.length > 0
          ? styles.artists_container
          : styles.artists_without_artists
      }
    >
      {artists.length > 0 && <h1 className={styles.title}>Artists</h1>}

      {/* only 6 artist */}
      <div className={styles.artists_image_wrapper}>
        {artists.slice(0, 10).map((artist) => {
          return (
            <div key={artist.id} className={styles.artist_info}>
              <Image
                className={styles.artist_image}
                src={
                  artist.images[0]?.url ||
                  'https://i.ibb.co/WDfq8z0/usuario.png'
                }
                alt="album"
                width={150}
                height={150}
                layout="intrinsic"
              />
              <Link href={`artist/${artist.id}`}>
                <p className={styles.artist_name}>{artist.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <h1 className={styles.title}>Albums</h1>
    </div>
  );
};

export default ArtistsContainer;
