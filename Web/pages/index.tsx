import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Calendar from '../resources/components/calendar';
import SideBar from '../resources/components/sidebar';
import { useCallback, useEffect, useState } from 'react';
import Routes from '../resources/constants/routes';

const Home: NextPage = () => {
  const currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth(); // months in moment are 0 based.
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
              <div className='col-md-10 p-0'>
                  { <Calendar year={year} month={month}/>}
              </div>
              {/* Navigation */}
              <div className='col-md-2 p-0'>
                <SideBar routeHandler='foo'/>
              </div>
            </div>
          </div>
        </main>

        <footer >
        
        </footer>
      </div>
  );
}
export default Home;
