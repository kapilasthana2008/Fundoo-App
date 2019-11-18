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
import PopperComponent from '../Components/PopperComponent'
import ColorPopper from '../Components/ColorPopper'
import Chip from '@material-ui/core/Chip';

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
            Description: "",
            deleteNotesnackBar: false,
            itemClicked: false,
            colorIconClick: false,
            setColor: this.props.item.color,
        }

    }


    cardClicked = async () => {


        this.setState({
            editCard: true,
            Title: this.props.item.title,
            Description: this.props.item.description
        })

    }

    closeBtnClick = async () => {

        await this.setState({
            editCard: false

        })

        console.log("note id ", this.props.item.description);

        let obj = {
            noteId: this.props.item.id,
            title: this.state.Title,
            description: this.state.Description
        }

        SerObj.updateNote(obj, (error, result) => {

            if (result) {
                this.props.updateNote()

            }
        })

    }

    async Input(event) {

        console.log("get target", event);

        await this.setState({

            [event.target.name]: event.target.value
        })

    }

    moreBtnClicked = async (event) => {


        await this.setState({

            Popper: !this.state.Popper,
            itemClicked: false,
            colorIconClick: false,
            anchorEl: event.currentTarget
        })
        console.log("more button clicked", this.state);
    }


    deletenote = (event) => {

        console.log("note deleted...");

        let obj = {

            noteIdList: [this.props.item.id],
            isDeleted: true
        }


        SerObj.deleteNote(obj, async (error, result) => {

            if (result) {

                await this.setState({
                    Popper: !this.state.Popper,
                    snackbarBool: true,
                    snackbarMsg: "trashed note"
                })

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

    colorsBtn = async (event) => {

        await this.setState({
            itemClicked: false,
            Popper: false,
            colorIconClick: !this.state.colorIconClick,
            anchorEl: event.currentTarget,

        })
        this.props.colosIcon(event)
    }

    setColor = async (colorCode) => {

        console.log("getting colorcode", colorCode);

        await this.setState({
            setColor: colorCode
        })
    }


    remindIconClicked = async (event) => {


        await this.setState({
            colorIconClick: false,
            itemClicked: !this.state.itemClicked,
            anchorEl: event.currentTarget,
            Popper: false
        })

    }

    render() {

        console.log("this. is state", this.props.item);



        return (

            <div>

                <div>

                    <Card style={{ backgroundColor: this.state.setColor }} className={(this.state.editCard) ? "EditmainDipalyCard" : "mainDipalyCard"}
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


                        <div className = "">
                            <Chip
                                icon={require('../assets/watch.svg')}
                                label="Nov 25 8:00 PM"
                                onClick="{handleClick}"
                                onDelete="{handleDelete}"
                            />
                        </div>


                        {/* utility part  */}

                        <div id={(this.state.editCard) ? "EditutililityIcons" : "utililityIcons"}>
                            <IconButton id="remindMe" onClick={event => this.remindIconClicked(event)}>
                                <img src={require('../assets/remind.svg')} />
                            </IconButton>

                            <IconButton>
                                <img src={require('../assets/collabs.svg')} />
                            </IconButton>

                            <IconButton onClick={(event) => this.colorsBtn(event)}>
                                <img src={require('../assets/color.svg')} />
                            </IconButton>

                            <IconButton>
                                <img src={require('../assets/AddImg.svg')} />
                            </IconButton>

                            <IconButton onClick={(event) => this.archiveNote(event)}>
                                <img src={require('../assets/archive.svg')} />
                            </IconButton>

                            <IconButton onClick={(event) => this.moreBtnClicked(event)}>

                                {(this.state.editCard) ? "" : <img id="moreimg" src={require('../assets/more.svg')} />}

                            </IconButton>
                            {
                                (this.state.editCard) ?
                                    <div id="closeBtn">
                                        <button id="EditBtn" onClick={this.closeBtnClick}>
                                            Close
                               </button>
                                    </div>
                                    : ""
                            }


                        </div>



                    </Card>


                    {(this.state.itemClicked) ? <PopperComponent popperBool={this.state.itemClicked}
                        anchor={this.state.anchorEl} />

                        : <Popper id="popper" open={this.state.Popper}
                            anchorEl={this.state.anchorEl} transition placement="bottom-start">

                            <Paper>
                                <Typography id="typographyEdit" onClick={event => this.deletenote(event)} ><div id="delete-note">Delete Note</div></Typography>
                                <Typography id="typographyEdit"><div id="delete-note">Add label</div></Typography>
                                <Typography id="typographyEdit"><div id="delete-note">Add drawing</div></Typography>
                                <Typography id="typographyEdit"><div id="delete-note">Make a copy</div></Typography>
                                <Typography id="typographyEdit"><div id="delete-note">Show checkbox</div></Typography>
                            </Paper>
                        </Popper>}

                    {(this.state.colorIconClick) ?
                        <ColorPopper id="colorPopper" popperBool={this.state.colorIconClick}
                            anchor={this.state.anchorEl} cardProps={this.props} changeColor={this.setColor} />
                        : ""}




                    <Snackbar

                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.snackbarBool}
                        message={this.state.snackbarMsg}
                        autoHideDuration={6000}
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