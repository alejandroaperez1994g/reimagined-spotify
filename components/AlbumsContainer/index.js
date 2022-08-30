import Album from '../Album';
import styles from './styles.module.css';

const AlbumsContainer = ({ albums }) => {
  return (
    <div className={styles.container}>
      {albums.map((album) => {
        return <Album key={album.id} album={album} />;
      })}
    </div>
  );
};

export default AlbumsContainer;
