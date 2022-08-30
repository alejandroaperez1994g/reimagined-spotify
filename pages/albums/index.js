import Head from 'next/head';
import AppLayout from '../../components/AppLayout';
import Sidebar from '../../components/Sidebar';
import MainSectionLayout from '../../components/MainSectionLayout';
import Navbar from '../../components/Navbar';
import CentralLayout from '../../components/CentralLayout';
import AlbumsContainer from '../../components/AlbumsContainer';
import getAccesToken from '../../services/getAccesToken';
import getNewReleases from '../../services/getNewReleases';

import styles from './styles.module.css';
import Image from 'next/image';
import Banner from '../../components/Banner';

const Albums = ({ items }) => {
  const randomAlbum = items[Math.floor(Math.random() * 25) + 1];
  console.log(randomAlbum);
  return (
    <div className={styles.container}>
      <Head>
        <title>Devify Albums</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotify-logo.ico" />
      </Head>
      <AppLayout>
        <Sidebar />
        <MainSectionLayout>
          <Navbar />
          <CentralLayout>
            <Banner
              albumImage={randomAlbum.images[0].url}
              title={randomAlbum.name}
              artist={randomAlbum.artists[0].name}
            />
            <AlbumsContainer albums={items} />
          </CentralLayout>
        </MainSectionLayout>
      </AppLayout>
    </div>
  );
};

export async function getServerSideProps() {
  const { access_token, token_type } = await getAccesToken();
  const albumsData = await getNewReleases(token_type, access_token);
  return {
    props: albumsData.albums, // will be passed to the page component as props
  };
}

export default Albums;