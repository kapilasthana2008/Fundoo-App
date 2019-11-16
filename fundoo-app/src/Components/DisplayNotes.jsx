import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import '../cssFiles/DispalyNotes.css'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Snackbar, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

const service = require('../Services/DashboardServices')
var SerObj = new service.NotesServices()


class DisplayNotes extends Component {

    constructor(props) {
        super(props)


        this.state = {
            Popper: false,
            anchorEl: null,
            snackbar: false,
            "snackbarMsg": "",
            "snackbarBool": false,
            editCard: false,
            Title: "",
            Description: ""
        }

    }


    cardClicked = async () => {


        this.setState({
            editCard: true,
            Title: this.props.item.title,
            Description: this.props.item.description
        })

    }

    closeBtnClick = async () =>{

        await  this.setState({
            editCard: false
           
        })
        
        console.log("this.sedit card",this.state.editCard);
        
    }

    async Input(event) {

        console.log("get target", event);

        await this.setState({

            [event.target.name]: event.target.value
        })

    }

    moreBtnClicked = async (event) => {
        console.log("more button clicked");

        await this.setState({
            Popper: !this.state.Popper,
            anchorEl: event.currentTarget
        })
        console.log("more button clicked", this.state);
    }


    deletenote = (event) => {

        let obj = {

            noteIdList: [this.props.item.id],
            isDeleted: true
        }

        SerObj.deleteNote(obj, async (error, result) => {

            if (result) {

                await this.setState({ Popper: !this.state.Popper })

                this.props.trash(this.props.item.id)
            }
        })

    }

    handleClose = async () => {
        await this.setState({ snackbarBool: !this.state.snackbarBool })
    }


    archiveNote = (event) => {

        console.log("item id", this.props.item.id);

        let obj = {

            noteIdList: [this.props.item.id],
            isArchived: true
        }

        SerObj.archiveNote(obj, async (error, result) => {

            if (result) {

                console.log("response archeive", result);

                await this.setState({
                    snackbarMsg: "archeived note.",
                    snackbarBool: true
                })
                
                console.log("archive method checking ", this.props.archiveMethod());

                this.props.archiveMethod()

            }
        })

    }

    render() {

        console.log("this. is state", this.props.item);



        return (

            <div>

                <div>

                    <Card className={(this.state.editCard) ? "EditmainDipalyCard" : "mainDipalyCard"}
                        >

                        {/* title part */}
                        <div id="titleRow" onClick={() => this.cardClicked()}>

                            <div id="title-show">
                                {
                                    (this.state.editCard) ?

                                        <InputBase
                                            name="Title"
                                            value={this.state.Title}
                                            onChange={event => this.Input(event)}

                                        />
                                        :
                                        this.props.item.title
                                }

                            </div>
                            <IconButton>
                                <img src={require('../assets/unpin.svg')} />
                            </IconButton>

                        </div>

                        {/* message display Part in card*/}

                        <div id="msgDisp-part" onClick={() => this.cardClicked()}>

                            {

                                (this.state.editCard) ?
                                    <InputBase
                                        name="Description"
                                        value={this.state.Description}
                                        onChange={event => this.Input(event)}


                                    />
                                    :
                                    this.props.item.description

                            }
                        </div>

                        {/* utility part  */}

                        <div id= {(this.state.editCard) ? "EditutililityIcons":"utililityIcons"}>
                            <IconButton id="remindMe">
                                <img src={require('../assets/remind.svg')} />
                            </IconButton>

                            <IconButton>
                                <img src={require('../assets/collabs.svg')} />
                            </IconButton>

                            <IconButton>
                                <img src={require('../assets/color.svg')} />
                            </IconButton>

                            <IconButton>
                                <img src={require('../assets/AddImg.svg')} />
                            </IconButton>

                            <IconButton onClick={(event) => this.archiveNote(event)}>
                                <img src={require('../assets/archive.svg')} />
                            </IconButton>

                            <IconButton onClick={(event) => this.moreBtnClicked(event)}>

                                {(this.state.editCard) ? "": <img id="moreimg" src={require('../assets/more.svg')} />}
                                
                            </IconButton>
                           {
                               (this.state.editCard) ? 
                               <div id = "closeBtn">
                               <button id = "EditBtn" onClick = { this.closeBtnClick}>
                               Close
                               </button> 
                               </div>
                               :""
                           }
                            

                        </div>



                    </Card>
                    <Popper id="popper" open={this.state.Popper}
                        anchorEl={this.state.anchorEl} transition placement="bottom-start">

                        <Paper>
                            <Typography id="typographyEdit" onClick={event => this.deletenote(event)} ><div id="delete-note">Delete Note</div></Typography>
                            <Typography id="typographyEdit"><div id="delete-note">Add label</div></Typography>
                            <Typography id="typographyEdit"><div id="delete-note">Add drawing</div></Typography>
                            <Typography id="typographyEdit"><div id="delete-note">Make a copy</div></Typography>
                            <Typography id="typographyEdit"><div id="delete-note">Show checkbox</div></Typography>
                        </Paper>
                    </Popper>


                    <Snackbar

                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.snackbarBool}
                        message={this.state.snackbarMsg}
                        autoHideDuration={3000}
                        onClose={this.handleClose}
                        action={[
                            <Button key="undo" color="primary" size="small" onClick={this.handleClose}>
                                UNDO
          </Button>,
                            <IconButton
                                key="close"
                                aria-label="close"
                                color="inherit"
                                onClick={this.handleClose}
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}

                    />
                </div>

            </div>
        )
    }
}

export default DisplayNotes