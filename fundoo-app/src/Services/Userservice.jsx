
import axios from 'axios'

const BaseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/user"


// const url = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp "
// const loginUrl = "http://fundoonotes.incubation.bridgelabz.com/api/user/login"
// const forgotPassword = "http://fundoonotes.incubation.bridgelabz.com/api/user/reset"
// const resetPassword = "http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password"

export function register(values,callback) {

    console.log("function called..\n",values);
    
    axios.post(BaseUrl+"/userSignUp", values).then((response) => {

    console.log("response",response);
              
        callback(null,response.data)
      
    }).catch((error) => {
      
  console.log("api error",error)
  
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

    console.log("reset email in values",values);
    
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
  
      console.log("token is",headers.Authorization);
      
    console.log("reset password",values);
    
    axios.post(BaseUrl+"/reset-password",values,{headers:headers}).then((response)=>{

     if(response){
       return callback(null,response)
     }
      
    }).catch((error)=>{

      return callback(error)
    })
  }