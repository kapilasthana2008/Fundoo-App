
import axios from 'axios'

const BaseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/user"



export function register(values,callback) {


    axios.post(BaseUrl+"/userSignUp", values).then((response) => {

  
              
        callback(null,response.data)
      
    }).catch((error) => {
  
     return callback(error)
  
    })
  }



  export function login(values,callback){

    axios.post(BaseUrl+"/login",values).then((response)=>{

     if(response){
       return callback(null,response)
     }
      
    }).catch((error)=>{

      return callback(error)
    })
  }

  export function resetPass(values,callback){


    
    axios.post(BaseUrl+"/reset",values).then((response)=>{

     if(response){
       return callback(null,response)
     }
      
    }).catch((error)=>{

      return callback(error)
    })
  }

  export function changePass(values,callback){

    var headers = {
      Authorization: localStorage.getItem('token')
    }
  
    axios.post(BaseUrl+"/reset-password",values,{headers:headers}).then((response)=>{

     if(response){
       return callback(null,response)
     }
      
    }).catch((error)=>{

      return callback(error)
    })
  }

  export function UploadProfile(values,callback){

    var headers = {
      Authorization: localStorage.getItem('token')
    }
  
    axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/uploadProfileImage",values,{headers:headers}).then((response)=>{

     if(response){
       return callback(null,response)
     }
      
    }).catch((error)=>{

      return callback(error)
    })
  }