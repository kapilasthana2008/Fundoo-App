import axios from 'axios'

const BaseUrl = "http://fundoonotes.incubation.bridgelabz.com/api"


let headers = {
    Authorization: localStorage.getItem('token')
}



export class ReminderServices{

    updateReminder = (values,callback) =>{

        axios.post(BaseUrl+"/notes/addUpdateReminderNotes",values,{ headers: headers }).then((response)=>{
            
            console.log("reminder response",response.data.data);
            
            return callback(null,response)

        }).catch((error)=>{

            console.log("error in reminder");

            return callback(error)
            
        })
    }


}

export default ReminderServices