import axios from 'axios'

const BaseUrl = "http://fundoonotes.incubation.bridgelabz.com/api"


let headers = {
    Authorization: localStorage.getItem('token')
}



export class EditLabelServices{



    getLabelList = (callback) =>{

        
        console.log("header in labels",headers);
        
        axios.get(BaseUrl+"/noteLabels/getNoteLabelList",{ headers: headers }).then((response)=>{

        // console.log("labels are ",response.data.data.details);
            
        callback(null,response.data.data.details)

        }).catch((result)=>{

            callback(null)

        })
    }

    createNewLabel = (values, callback) =>{

            console.log("values",values);
            
        axios.post( BaseUrl+"/noteLabels" ,values,{ headers: headers }).then((response)=>{

            console.log("response in edit label",response);
            

        }).catch((error)=>{

        })
    }

}

export default EditLabelServices