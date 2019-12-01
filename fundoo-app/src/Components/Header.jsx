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
import { connect } from 'react-redux';
// import SearchIcon from '@material-ui/icons/Search';

const service = require('../Services/EditLabelServices')
var obj = new service.EditLabelServices()

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
            anchorEl: null,
            value: 'Fundoo Apps',
            labels: []
        }
    }

    componentDidMount() {

        this.lebelList()
    }


    lebelList = () => {



        obj.getLabelList(async (error, result) => {

            if (result) {
                let arr = []
                arr = this.state.labels

                result.map((item, key) => {

                    arr.push(item)
                })
                await this.setState({ labels: arr })
            }

        })
    }


    menuClick = async () => {

        await this.setState({ toggleBool: !this.state.toggleBool })

        const menuToggle = {
            toggleBool: !this.state.toggleBool
        }

        this.props.dispatch({

            type:'ADD_POST',
            menuToggle
        });

        this.props.getvalue(this.state.toggleBool)

    }

    popUpClick = async (event) => {

        if (this.state.popupBool) {

            await this.setState({
                popupBool: false,

            })
        } else {
            await this.setState({
                popupBool: true,
                anchorEl: event.currentTarget
            })
        }

    }

    changegrid = async () => {



        if (this.state.gridchange) {

            await this.setState({
                gridchange: false

            })
            localStorage.setItem('grid', "false")

        } else {
            await this.setState({
                gridchange: true
            })
            localStorage.setItem('grid', "true")
        }

    }

    notes = (data) => {



        this.props.noteClicked(data)
    }

    arch = (data) => {


        this.props.archiveClickedHere(data)
    }

    trash = (data) => {


        this.props.trashClicked(data)
    }
    changeHeader = (value) => {

        this.setState({ value: value })

    }

    render() {
                

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
                                {this.state.value}
                            </Typography>

                            <div id="searchBar">

                                <div className="searchbar">

                                    <div id="searchField"></div>

                                    <InputBase startAdornment={(

                                        <InputAdornment position='start'>
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
                                        <Avatar alt="Remy Sharp" src={require('../assets/pic3.jpeg')} id="avtar" />
                                    </IconButton>
                                </div>
                            </div>

                        </Toolbar>

                    </AppBar>
                </div>

                <Popper className="profilePicPopper" open={this.state.popupBool}
                    anchorEl={this.state.anchorEl} transition placement="bottom-start">

                    <div>
                        <PopUp props={this.props} />
                    </div>
                    {/* <div id="popup">
                        
                    </div> */}


                </Popper>

                <DrawerList props={this.props} change={this.changeHeader} noteClick={this.notes}
                    togglebool={this.state.toggleBool} arch={this.arch} labelArr={this.state.labels}
                    trashbox={this.trash} />

            </div>
        )
    }

}

export default connect()(HeaderAppBar)