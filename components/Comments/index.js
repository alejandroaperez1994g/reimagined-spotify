import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';

import styles from './styles.module.css';

const Comments = () => {
  return (
    <div className={styles.container}>
      <Avatar alt="Jhon" src="https://i.ibb.co/jT5z7T1/Memoji-7.png" />
      <p className={styles.comments}>
        This Tuesday, February 22, 2022, at 10:22 p.m. sharp, a live from the
        group Daft Punk on Twitch shook the world of music and fans of the
        group, separated for a year.
      </p>
      <IconButton>
        <ArrowCircleUpIcon fontSize="large" sx={{ color: '#1dd662' }} />
      </IconButton>
    </div>
  );
};

export default Comments;
