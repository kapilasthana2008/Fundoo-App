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


let width = "280px";

class DrawerList extends Component {


    constructor(props) {
        super(props);


        this.state = {
            toggleBool: this.props.togglebool,
            bool: true,
            archiveBool:false,
            trashBool:false,
            noteBool:false
        }
    }

    style() {

        const useStyles = createMuiTheme((
            {
                overrides: {
                    MuiDrawer: {

                        paperAnchorLeft: {
                            top: "60px",
                            width: width

                        }
                    }
                }
            }));

        return useStyles
    }

    noteClicked = async()=>{
    
     await this.setState({noteBool:true})
        
        this.props.noteClick(this.state.noteBool)
    }

    archClicked = async () => {

        console.log("archive fun");

        await this.setState({archiveBool: true})

       this.props.arch(this.state.archiveBool)

    }

    trashClicked = async ()=>{

    
        await this.setState ({trashBool:true})

        // this.props.history.push('/Dashboard/Trash')
        this.props.trashbox(this.state.trashBool)

    }

    

    render() {

        console.log("state", this.props.togglebool);


        return (

            <div >
                {/* <MuiThemeProvider theme = {useStyles}> */}
                <MuiThemeProvider theme={this.style()}>
                    <Drawer

                        //    className={useStyles.overrides.MuiDrawer.paper}
                        variant="persistent"
                        anchor="left"
                        open={this.props.togglebool}

                    >

                        <Divider />
                        <List >

                            <ListItem button onClick = {this.noteClicked} >
                                <ListItemIcon>
                                    <img src={require('../assets/notes.svg')} alt="Logo" />
                                    {/* <InboxIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Notes" />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <img src={require('../assets/remind.svg')} alt="Logo" />
                                    {/* <DraftsIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Reminders" />
                            </ListItem>

                        </List>

                        <Divider />
                        <List>

                            <ListItem button>
                                <ListItemIcon>
                                    <img src={require('../assets/edit.svg')} alt="Logo" />
                                    {/* <DraftsIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Edit Labels" />
                            </ListItem>
                        </List>

                        <Divider />
                        
                        <ListItem button onClick = {this.archClicked}>
                        
                            <ListItemIcon >
                                <img src={require('../assets/archive.svg')} alt="Logo" />
                                {/* <img src={require('../Assets/remind.svg')} alt="Logo" id="imageFlex1" /> */}
                                {/* <DraftsIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Archive" />
                        </ListItem>

                        <ListItem button onClick = {this.trashClicked}>
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