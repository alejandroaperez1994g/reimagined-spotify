import Head from 'next/head';
import { useEffect, useState } from 'react';

import {
  AppLayout,
  Sidebar,
  MainSectionLayout,
  Navbar,
  CentralLayout,
  AlbumsContainer,
  ArtistsContainer,
} from '../../components';
import getSearch from '../../services/getSearch';

import styles from './styles.module.css';

const Search = ({ access_token, token_type }) => {
  const [searchData, setSearchData] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [lastQuery, setLastQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await getSearch(token_type, access_token, searchValue);
    setSearchData(result);
    saveQuery();
    setSearchValue('');
    setLastQuery(searchValue);
  };

  const saveQuery = () => {
    localStorage.setItem('last_query', searchValue);
  };

  useEffect(() => {
    getLastQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLastQuery = async () => {
    const last_query = localStorage.getItem('last_query');
    setLastQuery(last_query);
    const result = await getSearch(token_type, access_token, last_query);
    setSearchData(result);
  };

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
            {searchData.artists && (
              <h1 className={styles.search_query}>Top results: {lastQuery} </h1>
            )}
            <div className={styles.group}>
              <svg
                className={styles.icon}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <form onSubmit={(e) => handleSearch(e)} className={styles.form}>
                <input
                  placeholder="Search for artists or albums"
                  type="search"
                  className={styles.input_field}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </form>
            </div>
            {searchData.artists ? (
              <>
                <ArtistsContainer artists={searchData.artists.items} />

                <AlbumsContainer albums={searchData.albums.items} />
              </>
            ) : (
              <h1>No recent searches</h1>
            )}
          </CentralLayout>
        </MainSectionLayout>
      </AppLayout>
    </div>
  );
};

export default Search;

export async function getStaticProps() {
  const {
    access_token,
    token_type,
  } = require('../../cache/cache_credentials.json');

  return {
    props: { access_token, token_type },
  };
}
