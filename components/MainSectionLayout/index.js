import Comments from '../Comments';
import MusicPlayer from '../MusicPlayer';
import styles from './styles.module.css';

const MainSectionLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
      <div className={styles.bottom_section}>
        <MusicPlayer />
        <Comments />
      </div>
    </div>
  );
};

export default MainSectionLayout;
