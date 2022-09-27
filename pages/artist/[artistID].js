import Head from 'next/head';
import Image from 'next/image';
import getTopTracks from '../../services/getTopTracks';
import getArtistInfo from '../../services/getArtistInfo';
import getArtistAlbums from '../../services/getArtistAlbums';
import AlbumsContainer from '../../components/AlbumsContainer';
import { useEffect, useState } from 'react';
import {
  AppLayout,
  Sidebar,
  MainSectionLayout,
  Navbar,
  CentralLayout,
} from '../../components';
import { useRouter } from 'next/router';

import styles from './styles.module.css';

const Artist = () => {
  const router = useRouter();
  const [artistInfo, setArtistInfo] = useState({});
  console.log(artistInfo);
  useEffect(() => {
    const { artistID } = router.query;
    getData(artistID);
  }, [router.query]);

  const getData = async (artistID) => {
    const token = require('../../cache/cache_credentials.json');
    const artistInfo = await getArtistInfo(
      artistID,
      token.access_token,
      token.token_type
    );
    const artistAlbums = await getArtistAlbums(
      artistID,
      token.access_token,
      token.token_type
    );

    setArtistInfo({ artistInfo, artistAlbums: artistAlbums.items });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Devify Artist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotify-logo.ico" />
      </Head>
      <AppLayout>
        <Sidebar />
        <MainSectionLayout>
          <Navbar />
          <CentralLayout>
            <div className={styles.artist_details}>
              <div className={styles.artist_details_container}>
                <div className={styles.details}>
                  <div className={styles.profile_picture}>
                    <Image
                      className={styles.profile_image}
                      src={
                        artistInfo.artistInfo?.images[0].url ||
                        'https://i.ibb.co/WDfq8z0/usuario.png'
                      }
                      alt={artistInfo.artistInfo?.name}
                      width={200}
                      height={200}
                      layout="fixed"
                    />
                  </div>
                  <div className={styles.information}>
                    <p>ARTIST</p>
                    <h1 className={styles.artist_name}>
                      {artistInfo.artistInfo?.name}
                    </h1>
                    <div className={styles.genres}>
                      {artistInfo.artistInfo?.genres.map((genre, index) => (
                        <p key={index} className={styles.genre_tag}>
                          {genre}
                        </p>
                      ))}
                    </div>
                    <button className={styles.follow_button}>Follow</button>
                  </div>
                </div>
                {artistInfo.artistAlbums ? (
                  <AlbumsContainer albums={artistInfo.artistAlbums} />
                ) : (
                  <h2>There is no discography of this artist</h2>
                )}
              </div>
            </div>
          </CentralLayout>
        </MainSectionLayout>
      </AppLayout>
    </div>
  );
};

export default Artist;
