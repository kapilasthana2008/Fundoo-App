import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import '../cssFiles/Collabs.css'
import Avatar from '@material-ui/core/Avatar';

class Collaboration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            openDialog: this.props.collabsBool,
            
        }
    }

    handleClose = value => {

        this.setState({ openDialog: false })
    };


    render() {

        const fromDash = (

            <Dialog open={this.state.openDialog}  onClose={this.handleClose}>

                <div className="collaboratorPage">

                    <div id="Collbs-title">
                        Collaborators
                    </div>
                    <div id="collabs-line"></div>

                    <div className="collabsDisplay">
                        <div className = "collabs-Detail">
                           <div id = "imgPart">
                               <div id = "img">
                               <Avatar alt="Remy Sharp" src={require('../assets/pic3.jpeg')} id = "avtarImg"/>
                               </div>
                           </div>
                           <div id = "name_part">name</div>
                    </div>


                    </div>


                    <div className="btnArea">

                        <div id="Cancel_saveBtns">
                            <div id="cancelBtn">
                                <button id="sBtn">
                                    Cancel</button>
                            </div>
                            <div id="save_Btn">
                                <button id="sBtn">
                                    Save
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        )

        return (

            <div>
                {fromDash}
            </div>
        )
    }
}

export default Collaboration