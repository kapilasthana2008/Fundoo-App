import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import '../cssFiles/TakeAnote.css'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';


class InputNote extends Component {

    render() {
        return (
            <div>
                <Card className="mainInputCard">

                    <div id = "title-container">
                    
                        <div id ="title">
                            Title
                        </div>

                        <div id = "pinupImg">
                   
                        </div>
                    
                    </div>

                    <div className = "inputNote">
                    <InputBase id="searchtextBox" type="text"
                            placeholder="Take a note..."
                            name="" />
                    </div>

                    <div className = "utilityIcons">
                    dsfhskdkjf
                    </div>
                </Card>
            </div>
        )
    }
}
export default InputNote