import React, { Component } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import AddedLabel from '../Components/AddedLabel'
import '../cssFiles/EditLabel.css'

const service = require('../Services/EditLabelServices')
var obj = new service.EditLabelServices()

class EditLabel extends Component {


    constructor(props) {
        super(props)

        this.state = {
            openDialog: false,
            Label: "",
            labels: []
        }
    }


    componentDidMount() {


        this.setState({ openDialog: !this.state.openDialog })

       
    }

    async Input(event) {

        await this.setState({

            [event.target.name]: event.target.value
        })
    }

    handleClose = value => {

        this.setState({ openDialog: false })
    };

    creteLabel = () => {
       
        const values = {
            "label":this.state.Label,
            "isDeleted":false,
            "userId":localStorage.getItem('userId')
        }
        
        if (this.state.Label !== "") {

            obj.createNewLabel(values,(error,result)=>{

            })
        }

    }

    render() {

        
        return (

            <div className="editLabelContainer">

                <Dialog aria-labelledby="simple-dialog-title" open={this.state.openDialog}
                    onClose={this.handleClose} className="dialogue">

                    <DialogTitle >
                        <div id="dialog-title">
                            Edit Labels
                        </div>
                    </DialogTitle>

                    <List>
                        <ListItem >

                            <div id="editLabelText">

                                <Tooltip title="Create New label">
                                    <div id="plusIcon" >
                                        <img src={require('../assets/plus.svg')} />
                                    </div>
                                </Tooltip>

                                <div >
                                    <InputBase placeholder="Create new label" id="inputBase"

                                        name="Label"
                                        value={this.state.Label}
                                        onChange={event => this.Input(event)}
                                    />


                                </div>

                                <Tooltip title="create label">
                                    <div id="checkBtn" onClick={this.creteLabel}>
                                        <img src={require('../assets/checkBtn.svg')} />
                                    </div>
                                </Tooltip>

                            </div>
                        </ListItem>
                        <div id="Underline"></div>

                        <div>
                            <AddedLabel />


                        </div>

                    </List>

                </Dialog>


            </div>
        )
    }

}

export default EditLabel