import React, { Component } from 'react'

import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import '../cssFiles/Header.css'
import { yellow } from '@material-ui/core/colors';
import EditLabel from '../Components/EditLabel'


let width = "280px";

class DrawerList extends Component {

    constructor(props) {
        super(props);


        this.state = {
            toggleBool: this.props.togglebool,
            bool: true,
            archiveBool: false,
            trashBool: false,
            noteBool: false,
            noteItem: false,
            ReminderItem: false,
            editLabelItem: false,
            archiveItem: false,
            trashItem: false,
            labels: this.props.labelArr
        }

    }

    style() {
  
        const useStyles = createMuiTheme((
            {
                overrides: {

                    MuiDrawer: {

                        paperAnchorLeft: {
                            top: "65px",
                            width: width,
                            height:"90vh",
                            marginBottom:"10px"

                        },
                        paperAnchorDockedLeft:{
                         borderRight:"none"
                        }

                    }
                }
            }));

        return useStyles
    }




    noteClicked = async (event) => {

        await this.setState({
            noteBool: true,
            noteItem: true,
            ReminderItem: false,
            editLabelItem: false,
            archiveItem: false,
            trashItem: false

        })
        this.props.props.props.push('/Dashboard/Notes')
    }

    reminderClicked = async (event) => {

        await this.setState({
            noteBool: false,
            noteItem: false,
            ReminderItem: true,
            editLabelItem: false,
            archiveItem: false,
            trashItem: false

        }) 

        this.props.props.props.push('/Dashboard/Reminder')
    }

    EditClicked = async () => {
        await this.setState({
            noteItem: false,
            ReminderItem: false,
            editLabelItem: true,
            archiveItem: false,
            trashItem: false

        })
        // this.props.props.props.push('/Dashboard/EditLabel')
   
    }
    archClicked = async () => {

      
        await this.setState({
            archiveBool: true,
            archiveItem: true,
            noteItem: false,
            ReminderItem: false,
            editLabelItem: false,
            trashItem: false
        })

        this.props.arch(this.state.archiveBool)

        this.props.props.props.push('/Dashboard/Archive')
    }

    trashClicked = async () => {

        await this.setState({
            trashBool: true,
            trashItem: true,
            archiveItem: false,
            noteItem: false,
            ReminderItem: false,
            editLabelItem: false
        })   
        this.props.props.props.push('/Dashboard/Trash')
    }

    labelClicked = (index) =>{


    }

    render() {

           
        const EditLabels = this.state.labels.map((item,index)=>{

                return (

                
                    <ListItem button onClick = {event =>this.labelClicked(index)}>

                       <ListItemIcon>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z">
                    
                                </path></svg>
                                
                       </ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItem>
                
                )
            }) 


        return (

            <div >

                <MuiThemeProvider theme={this.style()}>

                    <Drawer id = "drawerManage"

                        variant="persistent"
                        anchor="left"
                        open={this.props.togglebool}
                    >
                        <Divider />

                        <List >

                            <ListItem
                                button onClick={event =>this.noteClicked(event)}
                                id={(this.state.noteItem) ? "note" : ""}
                            >
                                <ListItemIcon  >
                                    <img src={require('../assets/notes.svg')} alt="Logo" />
                                    {/* <InboxIcon /> */}
                                </ListItemIcon>

                                <ListItemText primary="Notes" />
                            </ListItem>

                            <ListItem button onClick={event=>this.reminderClicked(event)}
                                id={(this.state.ReminderItem) ? "note" : ""}
                            >

                                <ListItemIcon >
                                    <img src={require('../assets/remind.svg')} alt="Logo" />
                                    {/* <DraftsIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Reminders" />
                            </ListItem>

                        </List>

                        <Divider />
                     
                        <List id = "editItems">
                              <div id ="LabelName">
                              Labels
                              </div>  

                        {/*  */}
                           {EditLabels}
                    
                          
                            
                        <ListItem button onClick={this.EditClicked}
                             id={(this.state.editLabelItem) ? "note" : ""}>

                                <ListItemIcon>
                                    <img src={require('../assets/edit.svg')} alt="Logo" />
                                </ListItemIcon>
                                
                                <ListItemText primary="Edit Labels" />
                         </ListItem>
                            
                        </List>

                        <Divider />

                        <ListItem button onClick={this.archClicked}
                            id={(this.state.archiveItem) ? "note" : ""}>

                            <ListItemIcon >
                                <img src={require('../assets/archive.svg')} alt="Logo" />
                                {/* <img src={require('../Assets/remind.svg')} alt="Logo" id="imageFlex1" /> */}
                                {/* <DraftsIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Archive" />
                        </ListItem>

                        <ListItem button onClick={this.trashClicked} id={(this.state.trashItem) ? "note" : ""}>
                            <ListItemIcon>
                                <img src={require('../assets/trash.svg')} alt="Logo" />
                                {/* <img src={require('../Assets/remind.svg')} alt="Logo" id="imageFlex1" /> */}
                                {/* <DraftsIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Trash" />
                        </ListItem>

                    </Drawer>
                </MuiThemeProvider>

            {(this.state.editLabelItem) ? <EditLabel/>: ""}

            </div>
        )

    }
}


export default DrawerList