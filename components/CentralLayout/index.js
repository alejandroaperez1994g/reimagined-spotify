import styles from './styles.module.css';

const CentralLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CentralLayout;
