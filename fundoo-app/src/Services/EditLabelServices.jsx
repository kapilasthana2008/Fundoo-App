import axios from 'axios'

const BaseUrl = "http://fundoonotes.incubation.bridgelabz.com/api"


let headers = {
    Authorization: localStorage.getItem('token')
}


// 
export class EditLabelServices {



    getLabelList = (callback) => {


        console.log("header in labels", headers);

        axios.get(BaseUrl + "/noteLabels/getNoteLabelList", { headers: headers }).then((response) => {

            // console.log("labels are ",response.data.data.details);

            callback(null, response.data.data.details)

        }).catch((result) => {

            callback(null)

        })
    }

    createNewLabel = (values, callback) => {

        console.log("values", values);

        axios.post(BaseUrl + "/noteLabels", values, { headers: headers }).then((response) => {

            console.log("response in edit label", response);


        }).catch((error) => {

        })
    }

    LabelToNote = (values, callback) => {

        const urll = BaseUrl + "/notes/" + `${values.noteId}` + "/addLabelToNotes/" + `${values.lableId}/add`

        axios.post(urll, values, { headers: headers }).then((response) => {

            return callback(null, response)

        }).then((error) => {

            return callback(error)

        })
    }

    updateLabel = (values, callback) => {

    
        const url = BaseUrl + "/noteLabels/"+values.id+"/updateNoteLabel"

        axios.post(url,values,{ headers: headers }).then((response)=>{

            return callback(null,response)    
        
        }).catch((error)=>{
            return callback(error)
        })

    }

    deleteLabel = (values,callback)=>{
        const url = BaseUrl + "/noteLabels/"+values.id+"/deleteNoteLabel"

        axios.delete(url,values,{headers:headers}).then((response)=>{

            console.log("response delete",response);
            
        }).catch((error)=>{

        })
    }

}

export default EditLabelServices