import axios from 'axios'

const BaseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/notes"

let headers = {
    Authorization: localStorage.getItem('token')
}



export class NotesServices {



    addNote(values, callback) {


        console.log("token", headers.Authorization);


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

        console.log("header-->", headers.Authorization);

        axios.get(BaseUrl + "/getNotesList", { headers: headers }).then((response) => {

            
            
            return callback(null, response.data.data.data)

        }).catch((error) => {

            return callback(null, error)
        })

    }


}
