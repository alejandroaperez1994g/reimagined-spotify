import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import PauseIcon from './PauseIcon';

import { millisToMinutes } from '../../utils/converter';

import styles from './styles.module.css';
import { useState } from 'react';

const AlbumDetails = ({ tracks, albumInfo, artistInfo }) => {
  const [playing, setPlaying] = useState('');

  const handleClick = (e, track) => {
    setPlaying(track.name);
  };

  return (
    <div className={styles.details_container}>
      <p className={styles.followers}>
        {artistInfo.followers.total} MONTHLY LISTENERS
      </p>
      <div className={styles.album_info_wrapper}>
        <div
          className={styles.artist_image}
          style={{ backgroundImage: `url(${artistInfo?.images[0].url})` }}
        >
          <h2 className={styles.artist_name}>{tracks[0]?.artists[0].name}</h2>
        </div>
        <div className={styles.songs_container}>
          <h2>NEW RELEASE</h2>
          <div className={styles.album_wrapper}>
            <Image
              className={styles.album_picture}
              src={albumInfo?.images[0].url}
              alt="test"
              width={64}
              height={64}
              layout="fixed"
            />
            <div className={styles.album_info}>
              <p className={styles.album_name}>{albumInfo.name}</p>
              <p className={styles.album_artist}>{artistInfo.name}</p>
            </div>
          </div>

          <h2 className={styles.tracks_wrapper_title}>ALBUM SONGS</h2>
          <div className={styles.tracks_wrapper}>
            {tracks.map((track) => {
              return (
                <div
                  key={track.id}
                  className={styles.track_row}
                  onClick={(e) => handleClick(e, track)}
                  data_id={track.id}
                >
                  <p className={styles.row_title}>
                    {track.name}
                    {track.name === playing ? (
                      <PauseIcon />
                    ) : (
                      // <GraphicEqIcon className={styles.sound_icon} />
                      ''
                    )}
                  </p>

                  <p className={styles.row_time}>
                    {millisToMinutes(track.duration_ms)}
                  </p>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
