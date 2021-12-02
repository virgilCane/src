
export type Action = {type: "REDIRECT", payload: string}


export const redirect = (route:string):Action => ({
  type: "REDIRECT",
  payload: route
})