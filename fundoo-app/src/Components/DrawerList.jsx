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
            trashItem: false
        }

    }

    componentDidMount(){
        
        console.log("current path name---->",window.location.pathname);
        
    }

    style() {


        const useStyles = createMuiTheme((
            {
                overrides: {

                    MuiDrawer: {

                        paperAnchorLeft: {
                            top: "65px",
                            width: width

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

        console.log("event",event);
        this.props.change('reminder')
        
    }

    EditClicked = async () => {
        await this.setState({
            noteItem: false,
            ReminderItem: false,
            editLabelItem: true,
            archiveItem: false,
            trashItem: false

        })

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
        // this.props.history.push('/Dashboard/Trash')
       

    }


    render() {



        return (

            <div >

                <MuiThemeProvider theme={this.style()}>

                    <Drawer

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
                        <List>

                            <ListItem button onClick={this.EditClicked}
                                id={(this.state.editLabelItem) ? "note" : ""}
                            >

                                <ListItemIcon>
                                    <img src={require('../assets/edit.svg')} alt="Logo" />
                                    {/* <DraftsIcon /> */}
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
            </div>
        )

    }
}


export default DrawerList