import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';

import '../styles/globals.css';

const progress = new ProgressBar({
  size: 6,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
