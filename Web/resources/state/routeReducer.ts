import { Action } from "./actions";

export interface RouteState{
  route: string
}

const initialState = {
  route: "/"
}



export const routeReducer = (state: RouteState = initialState, action:Action) =>{
  switch(action.type){
    case "REDIRECT": {
      return {...state, route: action.payload}
    }
    default:
      return state;
  }
}