import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import '../cssFiles/UtililityIcons.css'

class UtilityIcons extends Component {


    constructor(props) {
        super(props)

        this.state = {


        }
    }






    render() {

        return (

            <div className="utility-icons">


                <div className = "reminder">

                    <img src={require('../assets/remind.svg')} id="remindIcon" />
                </div>
                
                <div className = "collabs">

                <img src={require('../assets/collabs.svg')} id="remindIcon" />
                </div>
                <div className = "color">

                <img src={require('../assets/color.svg')}id="remindIcon" />
                </div>
                <div className = "addImg">

                <img src={require('../assets/AddImg.svg')} id="remindIcon"/>
                </div>
                <div className = "archive">

                <img src={require('../assets/archive.svg')} id="remindIcon"/>
                </div>
                <div className = "more">

                <img id="moreimg" src={require('../assets/more.svg')} id="remindIcon" />
                </div>
            </div>
        )
    }
}

export default UtilityIcons