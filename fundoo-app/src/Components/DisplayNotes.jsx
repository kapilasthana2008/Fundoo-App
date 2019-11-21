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
import UtilityIcons from '../Components/UtilityIcons'
import Dialog from '@material-ui/core/Dialog';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
            clickedOutside:false,
            setColor: this.props.item.color,
        }
    }

    componentDidMount(){

   

    }
   

    cardClicked = async () => {

            // console.log("click on card",this.props);
            
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

     

        await this.setState({

            [event.target.name]: event.target.value
        })

    }

   

    handleClose = async () => {
        await this.setState({ snackbarBool: !this.state.snackbarBool })
    }


    archiveNote = (event) => {

    
        

        let obj = {

            noteIdList: [this.props.item.id],
            isArchived: true
        }

        SerObj.archiveNote(obj, async (error, result) => {

            if (result) {

             

                await this.setState({
                    snackbarMsg: "archeived note.",
                    snackbarBool: true
                })


                this.props.getNotes()

            }
        })

    }

    setColor = async (colorCode) => {


       await this.setState({setColor:colorCode})
    }

    getAllNotes = () => {

        this.props.getNotes() 
    }

    handleClickAway = async()=>{

        this.setState ({
            clickedOutside: !this.state.clickedOutside
        })

    }

    


    render() {

    
      

        return (

            <div>

                <div>

            
                    <Card style={{ backgroundColor: this.state.setColor }}
                    
                        className={(this.state.editCard) ? "EditmainDipalyCard" : "mainDipalyCard"}
                    >

                        {/* title part */}
                        <div id="titleRow" onClick={this.cardClicked}>

                            <div id="title-show">
                                {
                                    (this.state.editCard) ?

                                        <InputBase
                                            name="Title"
                                            defaultValue={this.state.Title}
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


                        {/* <div className = "">
                            <Chip
                                icon={require('../assets/watch.svg')}
                                label="Nov 25 8:00 PM"
                                onClick="{handleClick}"
                                onDelete="{handleDelete}"
                            />
                        </div> */}


                        {/* utility part  */}

                        <div className="utility-part">
                            
                            <div id = "utilIcons">

                            <UtilityIcons noteItems={this.props.item} getNotes={this.getAllNotes}
                            colosIcon={this.setColor}
                            editCard = {this.state.editCard}
                           
                             />    
                            </div>
                      
                            {(this.state.editCard)? 
                            <div id= "close-btn">
                            <button id="EditBtn" onClick={this.closeBtnClick}>
                                            Close
                               </button>
                            </div> : ""}
                        
                                                 
                        </div>
                       
                        {/* <div id={(this.state.editCard) ? "EditutililityIcons" : "utililityIcons"}>
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


                        </div> */}

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