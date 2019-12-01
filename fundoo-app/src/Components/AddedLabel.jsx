import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import LabelIcon from '@material-ui/icons/Label';
import InputBase from '@material-ui/core/InputBase';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import '../cssFiles/EditLabel.css'

const service = require('../Services/EditLabelServices')
var obj = new service.EditLabelServices()


class AddedLabel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            changeLabel: false,
            editLabel: "",
            value: this.props.itemValue.label,
            item: this.props.itemValue,
            labelId: ""
        }
    }

    labelChange = () => {

    }

    changeField = async (id) => {
    
        await this.setState({
            labelId: id
        })
        
    }


    async Input(event) {


        await this.setState({

            [event.target.name]: event.target.value
        })
    }


    update = () => {

        console.log("item value",this.state.item);
        
        let value = {
            "label": this.state.editLabel,
            "isDeleted": false,
            "id": this.props.itemValue.id,
            "userId": localStorage.getItem("userId"),
            "updated":""
        }
    
        obj.updateLabel(value ,async(error,result)=>{

            if(result){
                this.props.getList()
                await this.setState({updated:"updated"})
            }
        })
    }

    delete = () =>{
        
        let value = {
            id:  this.props.itemValue.id
        }

        obj.deleteLabel(value,(error,result)=>{

            if(result){
                this.props.getList()
            }
        })
    }



    render() {

        console.log(this.state.updated);
        
        return (
            <div  >
                <ListItem >
                    <div className="addedlabel">
                        <div>

                            {(this.state.labelId === this.props.itemValue.id) ?

                                <Tooltip title="delete label">
                                    <DeleteTwoToneIcon
                                        onClick={this.delete} /></Tooltip>
                                : <LabelIcon style={{ fontsize: '1rem' }} />}

                        </div>

                        <div id="simpleText" onClick={this.labelChange} >


                            <TextField

                                name="editLabel"

                                InputProps={{
                                    disableUnderline: true
                                }}
                                defaultValue={this.state.value}
                                onChange={event => this.Input(event)}
                                onClick={() => this.changeField(this.props.itemValue.id)}

                            />

                        </div>

                        <div id="editIcon" onClick={this.labelChange}>
                            {
                                (this.state.labelId === this.props.itemValue.id) ?
                                    <Tooltip title="update Label">
                                        <img src={require('../assets/checkBtn.svg')} onClick={this.update} /></Tooltip> :
                                    <Tooltip title="edit label">
                                        <img src={require('../assets/labelPencil.svg')} />
                                    </Tooltip>
                            }


                        </div>

                    </div>

                </ListItem>
            </div>
        )
    }
}

export default AddedLabel