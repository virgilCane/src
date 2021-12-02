import '../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import { store } from '../resources/state/store';
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
