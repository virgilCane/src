import { routeReducer } from './routeReducer';
import {createStore} from 'redux';

export const store = createStore(routeReducer)