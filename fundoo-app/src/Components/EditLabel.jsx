import React, { Component } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ButtonBase from '@material-ui/core/ButtonBase';
import LabelList from '../Components/LabelList'
import '../cssFiles/EditLabel.css'


const service = require('../Services/EditLabelServices')
var obj = new service.EditLabelServices()

class EditLabel extends Component {


    constructor(props) {
        super(props)

        this.state = {
            openDialog: false,
            cardAddLabel: "",
            labels: []
        }
    }


    componentDidMount() {

        this.setState({ openDialog: true})


    }

    doneBtn =()=>{

        this.setState({ openDialog: false})
    }

    handleClose = value => {

        this.setState({ openDialog: false })
    };


    render() {

        console.log("editLabel", this.state.labels);


        return (

            <div className="editLabelContainer">

                <Dialog aria-labelledby="simple-dialog-title" open={this.state.openDialog}
                    onClose={this.handleClose} className="dialogue">
                    <DialogTitle >
                        <div id="dialog-title">
                            Edit Labels
                        </div>
                    </DialogTitle>

                    <div>

                        <LabelList />
                    </div>

                    <div id="DoneBtnDiv">
                        <div>
                            <ButtonBase id="DoneBtn" onClick={this.doneBtn}>
                                Done
                            </ButtonBase>
                        </div>

                    </div>


                </Dialog>


            </div>
        )
    }

}

export default EditLabel