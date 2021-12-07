
const axios = require('axios').default;
const api = axios.create({
  baseUrl: 'https://localhost:44304/',
  timeout: 1000
});

export class BaseRepo{

  async get(path:string){
    try{
      const response = await api.get(path);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  async post(path:string, body:any){
    try{
      const response = await api.post(path, body);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  async put(path:string, body:any){
    try{
      const response = await api.put(path, body);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  async delete(path:string){
    try{
      const response = await api.delete(path);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }
}

