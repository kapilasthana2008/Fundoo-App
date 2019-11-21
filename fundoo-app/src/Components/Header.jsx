import React, { Component } from 'react'
import '../cssFiles/Header.css'
import DrawerList from './DrawerList';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import PopUp from '../Components/Popup'
import Popper from '@material-ui/core/Popper';
import IconButton from '@material-ui/core/IconButton';
import { Toolbar, InputAdornment } from '@material-ui/core';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
// import SearchIcon from '@material-ui/icons/Search';



const useStyles = createMuiTheme((
    {

        overrides: {

            MuiAppBar: {

                root: {
                    background: 'red'
                }

            }
        }
    }));



class HeaderAppBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toggleBool: false,
            popupBool: false,
            gridchange: false,
            anchorEl : null
        }

    }
    style() {



        return useStyles
    }
    // style() {

    //     overrides: {
    //         MuiAppBar: {

    //             top: "60px",
    //                 width: ''
    //         },
    //         MuiButtonBase: {
    //             top: "60px",
    //                 width: ''

    //         }

    //     }
    // }

    menuClick = async () => {

        await this.setState({ toggleBool: !this.state.toggleBool })


        console.log("togglebool", this.state.toggleBool);

        console.log("this.props in header", this.props);
        this.props.getvalue(this.state.toggleBool)


    }

    popUpClick = async (event) => {



        if (this.state.popupBool) {

            await this.setState({
                popupBool: false,
                anchorEl: event.currentTarget
               })
        } else {
            await this.setState({
                popupBool: true
            })
        }

       
    }

    changegrid = async () => {

        console.log("popup");

        if (this.state.gridchange) {

            await this.setState({
                gridchange: false
            })
        } else {
            await this.setState({
                gridchange: true
            })
        }

    }

    notes = (data) => {



        this.props.noteClicked(data)
    }

    arch = (data) => {


        this.props.archiveClickedHere(data)
    }

    trash = (data) => {

        console.log("trash box is comming");
        this.props.trashClicked(data)
    }

    render() {

        console.log("in header render", this.props);

        return (

            <div>

                <div>
                    <AppBar>

                        <Toolbar className="toolbar">

                            <div>

                                <IconButton id="menubtn" onClick={this.menuClick}>
                                    <img src={require('../assets/menuicon.jpg')} id="menuImg" />
                                </IconButton>

                            </div>

                            <div id="fundooImg">
                                <img src={require('../assets/fundoo.png')} id="fundooImgsrc" />
                            </div>

                            <Typography id="appName" variant="h6" Wrap>
                                Fundoo App
                  </Typography>

                            <div id="searchBar">

                                <div className="searchbar">

                                    <div id="searchField"></div>

                                        <InputBase startAdornment = {(
                                          
                                            <InputAdornment position ='start'>
                                                <SearchIcon />
                                            </InputAdornment>
                                        )}
                                         id="searchtext" type="text"
                                            placeholder="Search"
                                            name="" />
                                    </div>

                                   
                                        {/* <img id = "crossimg" src = {require('../assets/cross-out.png')}/> */}
                                    

                                </div>
                            
                            <div className="userDetailsPart">

                                <div className="refreshAndGrid">
                                    <div id="refreshImg">
                                        <img src={require("../assets/refresh.svg")} id="refImg" />
                                    </div>

                                    <div id="grid" onClick={this.changegrid}>

                                        <img src={(this.state.gridchange) ? require('../assets/grid.svg') :
                                            require('../assets/grid1.svg')}
                                            id="refreshImg" />

                                        {/* <img src={require('../assets/grid1.svg')} id="refreshImg" /> */}

                                    </div>

                                </div>
                                <div id="profileIcon">
                                    <IconButton id="profile-icon" onClick={event => this.popUpClick(event)}>
                                        <Avatar alt="Remy Sharp" src={require('../assets/fundoo.png')} id="avtar" />
                                    </IconButton>
                                </div>
                            </div>

                        </Toolbar>

                    </AppBar>
                </div>

                <Popper open={this.state.popupBool} >
                    <div className="popupContainer">
                        <div id="popup">
                            <PopUp props={this.props} />
                        </div>
                    </div>
                </Popper>

                <DrawerList noteClick = {this.notes} togglebool={this.state.toggleBool} arch = {this.arch}
                 trashbox = {this.trash}/>

            </div>
        )
    }

}

export default HeaderAppBar