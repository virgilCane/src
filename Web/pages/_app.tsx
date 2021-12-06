import '../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import { store } from '../resources/state/store';
import Layout from '../resources/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  ) 
}

export default MyApp
