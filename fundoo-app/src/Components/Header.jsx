import React, { Component } from 'react'
import '../cssFiles/Header.css'
import DrawerList from './DrawerList';
import InputBase from '@material-ui/core/InputBase';
import PopUp from '../Components/Popup'
import Popper from '@material-ui/core/Popper';

// import SearchIcon from '@material-ui/icons/Search';



class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toggleBool: false,
            popupBool: false,
            gridchange:false
        }
 
    }

    menuClick = async () => {

        if (this.state.toggleBool) {

            await this.setState({
                toggleBool: false
            })
        } else {
            await this.setState({
                toggleBool: true
            })
        }

        console.log("togglebool", this.state.toggleBool);

    }

    popUpClick = async () => {

        console.log("popup");

        if (this.state.popupBool) {

            await this.setState({
                popupBool: false
            })
        } else {
            await this.setState({
                popupBool: true
            })
        }

        console.log("popupBool", this.state.popupBool);
    }

    changegrid = async ()=>{

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

    render() {
        return (
            <div className="header">

                <div className="menuWithLogo">

                    <div id="menuIcon" onClick={this.menuClick}>

                        <img src={require('../assets/menuicon.jpg')} id="menuImg" />

                    </div>

                    <div id="logo">

                        <div id="logoImg">

                            <img src={require('../assets/funImg.png')} id="svgImg" />

                        </div>
                        <div id="keep">
                            FundooApp
                        </div>

                    </div>

                </div>

                <div className="searchbar">


                    <div id="searchicon">
                        <img id="searchimg" src={require('../assets/searchIcn.png')} />

                    </div>

                    <div id="searchField">

                        <InputBase id="searchtext" type="text"
                            placeholder="Search"
                            name="" />
                    </div>

                    <div id="searchCroxBtn">
                        {/* <img id = "crossimg" src = {require('../assets/cross-out.png')}/> */}
                    </div>

                </div>

                <div className="accountDetailsPart">

                    <div className="setting-grid">

                        <div id="refreshIcon">

                            <div id="refresh">
                            <img src= {require("../assets/refresh.svg")} id="refreshImg" />
                        
                            </div>

                        </div>

                        <div id="gridIcon">

                            <div id="refresh" onClick={this.changegrid}>
                            <img src= { (this.state.gridchange) ?  require('../assets/grid.svg') : 
                            require('../assets/grid1.svg')} 
                            id="refreshImg" />

                            {/* <img src={require('../assets/grid1.svg')} id="refreshImg" /> */}
                            </div>
                        </div>

                    </div>

                    <div id="profilelogo">

                        <div id="profile" onClick={this.popUpClick}>
                            <img src={require('../assets/funImg.png')} id="profile" />

                        </div>
                    </div>

                    

                </div>

                <Popper open={this.state.popupBool}>
                    <div className="popupContainer">
                        <div id="popup">
                            <PopUp props={this.props} />
                        </div>
                    </div>
                </Popper>



                <DrawerList togglebool={this.state.toggleBool} />

            </div>
        )
    }

}

export default Header