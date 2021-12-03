import type { NextPage } from 'next'

import Calendar from '../resources/components/calendar';

import Routes from '../resources/constants/routes';
import {useSelector, useDispatch} from 'react-redux';
import {RouteState} from '../resources/state/routeReducer'
import { redirect } from '../resources/state/actions';

const Home: NextPage = () => {
  //Route state
  // const route = useSelector<RouteState, RouteState["route"]>((state) => state.route);
  // const dispatch = useDispatch();
  // const onRedirect = (route:string):void =>{
  //   dispatch(redirect(route));
  // }
  //Date data
 
  return (
      <main className='w-100'>
        <h1>Homepage</h1>
      </main>
  );
}
export default Home;
