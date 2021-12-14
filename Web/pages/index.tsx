import type { NextPage } from 'next'

import Calendar from '../resources/components/calendar';

import Routes from '../resources/constants/routes';
import {useSelector, useDispatch} from 'react-redux';
import {RouteState} from '../resources/state/routeReducer'
import { redirect } from '../resources/state/actions';

const Home: NextPage = () => {

 
  return (
      <main className='w-100'>
        <h1>Homepage</h1>
      </main>
  );
}
export default Home;
