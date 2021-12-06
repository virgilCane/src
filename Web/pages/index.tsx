import type { NextPage } from 'next'
import Head from 'next/head'
import Calendar from '../resources/components/calendar';
import SideBar from '../resources/components/sidebar';
import Routes from '../resources/constants/routes';
import {useSelector, useDispatch} from 'react-redux';
import {RouteState} from '../resources/state/routeReducer'
import { redirect } from '../resources/state/actions';

const Home: NextPage = () => {
  //Route state
  const route = useSelector<RouteState, RouteState["route"]>((state) => state.route);
  const dispatch = useDispatch();
  const onRedirect = (route:string):void =>{
    dispatch(redirect(route));
  }
  //Date data
  const currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth(); // months in moment are 0 based.
  console.log(route)
  return (
      <div>
        <Head>
          <title>Hooty Home</title>
          <meta name="description" content="An App to Make You Want to Kill Your Flatmates Less" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main >
          <div className='container-fluid'>
            <div className='row'>
              {/* Action Pane */}
              <div className='col-md-10 p-0'>
                  {route == Routes.home && <Calendar year={year} month={month}/>}
              </div>
              {/* Navigation */}
              <div className='col-md-2 p-0'>
                <SideBar redirect={onRedirect}/>
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
