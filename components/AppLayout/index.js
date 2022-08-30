import styles from './styles.module.css';

const AppLayout = ({ children }) => {
  return <div className={styles.app__container}>{children}</div>;
};

export default AppLayout;
