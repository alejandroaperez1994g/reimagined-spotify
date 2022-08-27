import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';

import styles from './styles.module.css';

const EventInfo = ({ eventTitle }) => {
  const totalListening = 4823129;
  return (
    <div className={styles.container}>
      <p className={styles.event_type}>
        Listening Event
        <span className={styles.event_title}> by {eventTitle}</span>
      </p>
      <div className={styles.avatar_group}>
        <AvatarGroup>
          <Tooltip title="Remy Sharp" placement="top">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://i.ibb.co/Wnfn3rD/Memoji.png"
            />
          </Tooltip>
          <Tooltip title="Remy Sharp" placement="top">
            <Avatar
              className={styles.avatar}
              alt="Travis Howard"
              src="https://i.ibb.co/vDk1TqN/Memoji-1.png"
            />
          </Tooltip>
          <Tooltip title="Agnes Walker" placement="top">
            <Avatar
              className={styles.avatar}
              alt="Agnes Walker"
              src="https://i.ibb.co/JB7RwWH/Memoji-3.png"
            />
          </Tooltip>
          <Tooltip title="Trevor Henderson" placement="top">
            <Avatar
              className={styles.avatar}
              alt="Trevor Henderson"
              src="https://i.ibb.co/jT5z7T1/Memoji-7.png"
            />
          </Tooltip>
        </AvatarGroup>
        <Button variant="contained" className={styles.invite_button}>
          Invite Friends
        </Button>
      </div>
      <p className={styles.total_listening}>
        {totalListening.toLocaleString('en-US')} Listening
      </p>
    </div>
  );
};

export default EventInfo;
