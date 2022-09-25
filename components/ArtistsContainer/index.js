import Image from 'next/image';

import styles from './styles.module.css';

const ArtistsContainer = ({ artists }) => {
  // [0].images[0].url

  return (
    <div className={styles.artists_container}>
      <h1 className={styles.title}>Artists</h1>
      {/* only 6 artist */}
      <div className={styles.artists_image_wrapper}>
        {artists.slice(0, 7).map((artist) => {
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
              <p>{artist.name}</p>
            </div>
          );
        })}
      </div>
      <h1 className={styles.title}>Albums</h1>
    </div>
  );
};

export default ArtistsContainer;
