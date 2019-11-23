import axios from 'axios'

const BaseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/notes"
const ReminderBaseUrl = "http://fundoonotes.incubation.bridgelabz.com/api"

let headers = {
    Authorization: localStorage.getItem('token')
}



export class NotesServices {


    addNote(values, callback) {


    


        axios.post(BaseUrl + "/addNotes", values, { headers: headers }).then((response) => {

            console.log("response", response);

            if (response) {
                return callback(null, response)
            }
        }).catch((error) => {
            console.log("response", error);
            return callback(null)
        })

    }

    getAllNotes(callback) {

        let headers = {
            Authorization: localStorage.getItem('token')
        }
        console.log("header-->", headers.Authorization);

        axios.get(BaseUrl + "/getNotesList", { headers: headers }).then((response) => {

            
            
            return callback(null, response.data.data.data)

        }).catch((error) => {

            return callback( error)
        })

    }

    updateNote(values,callback){

   
        axios.post(BaseUrl + "/updateNotes", values, { headers: headers }).then((response)=>{

            return callback(null,response)
            
        }).catch((error)=>{

            return callback(error)
            
        })
    }

    deleteNote(values,callback){

        axios.post(BaseUrl+"/trashNotes",values,{ headers: headers }).then((response)=>{

            return callback(null,response)
        
        }).catch((error)=>{

            return callback(error)
            
        })
    }

    archiveNote(values,callback){

        axios.post(BaseUrl+"/archiveNotes",values,{ headers: headers }).then((response)=>{
         
        return callback(null,response)
            

        }).catch((error)=>{

            return callback(error)
            console.log("archive error",error);
        })
    }

    getAllarchive(callback){

        axios.get(BaseUrl+"/getArchiveNotesList",{ headers: headers }).then((response)=>{

            // console.log("archive notes..",response.data.data);
            

            return callback(null,response.data.data)
            
        }).catch((error)=>{

            console.log("error part",error);
            return callback(error)

            
            
        })
    }
    trashNotesList(callback){

        axios.get(BaseUrl+"/getTrashNotesList",{ headers: headers }).then((response)=>{

           
            return callback(null,response.data.data)
            

        }).catch((error)=>{

            console.log("error in trash API",error);
            return callback(error)
            

        })
    }

    colorChange(values,callback){
      
      
        axios.post(BaseUrl+"/changesColorNotes",values,{ headers: headers }).then((response)=>{


            
            return callback(null,response)

        }).catch((error)=>{

            return callback(error)

        })
    }

    deleteReminder(values,callback){

        axios.post(ReminderBaseUrl+"/notes/removeReminderNotes",values,{ headers: headers }).then((response)=>{

            return callback(null,response)
        }).catch((error)=>{

            return callback(error)
        })
    }
}
