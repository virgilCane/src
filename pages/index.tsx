import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Calendar from '../resources/components/calendar';
import SideBar from '../resources/components/sidebar';

const Home: NextPage = () => {
  const router = useRouter();
  const noRoute = router.query.id == null;
  return (
    <div>
    <Head>
      <title>Homely</title>
      <meta name="description" content="An App to Make You Want to Kill Your Flatmates Less" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main >
      <div className='container-fluid'>
        <div className='row'>
          {/* Action Pane */}
          <div className='col-md-9 p-0'>
              {noRoute && <Calendar year='2021' month='03'/>}
          </div>
          {/* Navigation */}
          <div className='col-md-3 p-0'>
            <SideBar/>
          </div>
        </div>
      </div>
    </main>

    <footer >
    
    </footer>
  </div>
  )
}

export default Home
