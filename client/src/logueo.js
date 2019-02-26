import axios from 'axios';

export default class logueo{
  constructor(){
    this.service=axios.create({
      baseURL:"http://localhost:4000",
      withCredentials: true
    });
  }
  signUp = (datosDeLogueo) =>{
    
     return this.service.post('/auth/signup',datosDeLogueo)
    .then(({data})=>{
      
      return data
    })
    .catch(err=>{
      
      console.log(err)})
  }

  login = (datosLogin) =>{

    return this.service.post('/auth/login',datosLogin)
    .then(({data})=>{
      
      return data
    })
    .catch(err=>{
      
      console.log(err)})
  }


  logueado = (datosLogin) =>{

    return this.service.get('/auth/loggedin',datosLogin)
    .then(({data})=>{
      
      return data
    })
    .catch(err=>{
      
      console.log(err)})
  }

  updatePhoto = (photo)=>{
    let formData = new FormData();
  formData.append("photo", photo)
  return this.service.post('/auth/updatePhoto',formData,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  .then(({data})=>{
    
    return data
  })
  .catch(err=>{
    
    console.log(err)})
}
  

  update = (datos) =>{
    
    return this.service.post('/auth/update',datos)
    .then(({data})=>{
      
      return data
    })
    .catch(err=>{
      
      console.log(err)})
  }
  
}