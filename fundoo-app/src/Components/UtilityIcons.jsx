import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import '../cssFiles/UtililityIcons.css'
import { Paper, Popper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import ColorPopper from '../Components/ColorPopper'

const service = require('../Services/DashboardServices')
var SerObj = new service.NotesServices()

class UtilityIcons extends Component {


    constructor(props) {
        super(props)


        this.state = {

            colorIconClick: false,
            anchorEl: null,
            MorePopper: false,
            snackbarMsg: '',
            setColor: '',
            DashboardBool: this.props.toggleBool,
            addlabelBool:false,

        }


    }


    colorForDashboard = (colorCode)=>{

       
        
        this.props.getcolorForDash(colorCode)
        // console.log("getting color in utility",);
        
    }

    remindIconClicked = async (event) => {


        await this.setState({
            colorIconClick: false,
            anchorEl: event.currentTarget,
            Popper: false,
            snackbarBool: false
        })

    }

    archiveNote = (event) => {

      if(this.state.DashboardBool === false){

        this.props.isArchive(true)   
        
      }else{
        
        let obj = {

            noteIdList: [this.props.noteItems.id],
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
    }


    colorsBtn = async (event) => {

        await this.setState({
            MorePopper: false,
            colorIconClick: !this.state.colorIconClick,
            anchorEl: event.currentTarget,
        })
    }

    getcolorCode = (colorCode) => {

     
        this.props.colosIcon(colorCode)
        
        
    }

    moreBtnClicked = async (event) => {

        await this.setState({

            MorePopper: !this.state.MorePopper,
            anchorEl: event.currentTarget,
            addlabelBool:false,
            colorIconClick:false
        })


    }

    deletenote = (event) => {

       
        let obj = {

            noteIdList: [this.props.noteItems.id],
            isDeleted: true
        }


        SerObj.deleteNote(obj, async (error, result) => {

            if (result) {

                await this.setState({
                    Popper: !this.state.Popper,
                    snackbarBool: true,
                    snackbarMsg: "trashed note"
                })

                this.props.getNotes()
            }
        })

    }

   
    addLabel = (event) =>{

        this.setState({MorePopper:false,
            addlabelBool:true,
           
        })



    }

    render() {

       console.log("this.from take note",this.props);
       
        
        return (

            <div>
                <div className= "utility-icons" >

                    <div className="reminder" onClick={event => this.remindIconClicked(event)}>

                        <img src={require('../assets/remind.svg')} id="remindIcon" />
                    </div>


                    <div className={(this.state.DashboardBool === false)? "For-Dashboard-Collabs" :"collabs"}>

                        <img src={require('../assets/collabs.svg')} id="remindIcon" />
                    </div>


                    <div className={(this.state.DashboardBool === false)? "For-Dashboard-color":"color"}>

                        <img src={require('../assets/color.svg')} id="remindIcon"
                            onClick={(event) => this.colorsBtn(event)} />
                    </div>


                    <div className={(this.state.DashboardBool=== false)? "For-Dashboard-addImg":"addImg"}>

                        <img src={require('../assets/AddImg.svg')} id="remindIcon" />
                    </div>

                    <div className= {(this.state.DashboardBool === false) ? "For-Dashboard-archive" : "archive"}>

                        <img src={require('../assets/archive.svg')} id="remindIcon"
                            onClick={(event) => this.archiveNote(event)} />
                    </div>

                    <div className={(this.state.DashboardBool === false) ? "For-Dashboard-more": "more"} 
                    onClick={(event) => this.moreBtnClicked(event)}>
                        <img id="moreimg" src={require('../assets/more.svg')} id="remindIcon" />
                    </div>
                </div>


                <Popper id="popper" open={this.state.MorePopper}

                    anchorEl={this.state.anchorEl} transition placement="bottom-start">

                    <Paper>

                    {
                        (this.state.DashboardBool === false) ? "" :
                        
                        <Typography id="typographyEdit" onClick={event => this.deletenote(event)} >
                        <div id="delete-note">Delete Note</div>
                        </Typography>       
                    }

                    {
                        (this.state.DashboardBool === false) ? "" :
                       
                        <Typography id="typographyEdit">
                        <div id="delete-note">Make a copy</div>
                        </Typography>   
                    }
                        <Typography id="typographyEdit" onClick={event => this.addLabel(event)}>
                        <div id="delete-note">Add label</div>
                        </Typography> 

                        <Typography id="typographyEdit"><div id="delete-note">Add drawing</div></Typography>
                        <Typography id="typographyEdit"><div id="delete-note">Show checkbox</div></Typography>
        
                    </Paper>

              
                </Popper>

                    
                    
                    <Popper id = "addLabelPopper" open ={this.state.addlabelBool}
                    anchorEl={this.state.anchorEl} transition placement="bottom-start">
                       
                      
                      
                       <Paper>


                    gdfgdfg
                    
                       </Paper>


                    </Popper>




                {(this.state.colorIconClick) ?
                    <ColorPopper id="colorPopper" popperBool={this.state.colorIconClick}
                        anchor={this.state.anchorEl} cardProps={this.props} changeColor={this.getcolorCode}
                        dashboardBool = {this.state.DashboardBool}
                        dashboardNote = {this.colorForDashboard}
                         />
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
        )
    }
}

export default UtilityIcons