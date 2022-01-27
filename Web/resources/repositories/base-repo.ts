import DateEvent from "../models/date-event";

const axios = require('axios').default;


export class BaseRepo{
  path:string;
  api: any

constructor(path: string){
  this.path = path;
  this.api = axios.create({
    baseURL: 'https://localhost:44304/api/',
    timeout: 1000
  });
}

  get(parms: any){
    try{
      let queryString = "";
      Object.entries(parms).forEach(([key, value]) => {
      if (value)
      queryString += !queryString ? `?${key}=${value}` : `&${key}=${value}`;
      });
       return this.api.get(`${this.path}${queryString}`)
      .then(res =>res.data)
      .catch((err:any) =>{
        console.log(err);
      });
      
    }catch(error){
      console.log(error);
    }
  }

  async post(path:string, body:any){
    try{
      const response = await this.api.post(path, body);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  async put(path:string, body:any){
    try{
      const response = await this.api.put(path, body);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  async delete(path:string){
    try{
      const response = await this.api.delete(path);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }
}

