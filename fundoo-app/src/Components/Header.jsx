import React, { Component } from 'react'
import '../cssFiles/Header.css'
import DrawerList from './DrawerList';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import PopUp from '../Components/Popup'
import Popper from '@material-ui/core/Popper';
import IconButton from '@material-ui/core/IconButton';


// import SearchIcon from '@material-ui/icons/Search';



class HeaderAppBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toggleBool: false,
            popupBool: false,
            gridchange: false
        }

    }

    menuClick = async () => {

      await  this.setState({ toggleBool: !this.state.toggleBool })
        

        console.log("togglebool", this.state.toggleBool);

         console.log("this.props in header", this.props);
        this.props.getvalue(this.state.toggleBool)


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

    arch =(data)=>{
        
        
        this.props.archiveClickedHere(data)
    }

    trash =(data) =>{

        console.log("trash box is comming");
        this.props.trashClicked(data)
    }

    render() {

        console.log("in header render",this.props);
        
        return (
            <div className="header">
        
                             <div className="menuWithLogo">

                    {/* <div  > */}
                    <IconButton id="menuIcon" onClick={this.menuClick}>
                        <img src={require('../assets/menuicon.jpg')} id="menuImg" />
                    </IconButton>
                    {/* </div> */}

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
                                <img src={require("../assets/refresh.svg")} id="refreshImg" />

                            </div>

                        </div>

                        <div id="gridIcon">

                            <div id="refresh" onClick={this.changegrid}>
                                <img src={(this.state.gridchange) ? require('../assets/grid.svg') :
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


                <DrawerList togglebool={this.state.toggleBool} arch = {this.arch} trashbox = {this.trash}/>

            </div>
        )
    }

}

export default HeaderAppBar