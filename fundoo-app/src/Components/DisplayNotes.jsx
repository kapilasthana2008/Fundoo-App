import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import '../cssFiles/DispalyNotes.css'

class DisplayNotes extends Component {

    constructor(props) {
        super(props)
    }



cardClicked = () =>{

    console.log("card clicked");
    
}
    

    render() {

        
        return (

            <div>

                <div>
                    <Card className="mainDipalyCard" onClick = {() => this.cardClicked()}>

                        {/* title part */}
                        <div id="titleRow">
                            <div id="title-show">{this.props.item.title}</div>
                            <div id="pinupImg"> <img  src = {require('../assets/unpin.svg')}/></div>
                        </div>

                        {/* message display Part in card*/}

                        <div id = "msgDisp-part">{this.props.item.description}</div>
                       
                       {/* utility part  */}

                        <div id = "utililityIcons">
                            <div id = "remindMe"><img  src = {require('../assets/remind.svg')}/></div>
                            <div id = "collaboration"> <img  src = {require('../assets/collabs.svg')}/></div>
                            <div id = "changeColor"><img  src = {require('../assets/color.svg')}/></div>
                            <div id = "addImage"><img  src = {require('../assets/AddImg.svg')}/></div>
                            <div id ="archive"><img  src = {require('../assets/archive.svg')}/></div>
                            <div id = "more"><img id ="moreimg" src = {require('../assets/more.svg')}/></div>
                        </div>

                    </Card>
                </div>

            </div>
        )
    }
}

export default DisplayNotes