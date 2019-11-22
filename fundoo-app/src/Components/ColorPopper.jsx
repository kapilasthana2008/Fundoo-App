import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import { object } from 'prop-types';

const service = require('../Services/DashboardServices')
var SerObj = new service.NotesServices()


const colors = [
    {
        Colorname: "default",
        colorcode: "#ffffff"
    },
    {
        Colorname: "pink",
        colorcode: "#ffc0cb"
    },
    {
        Colorname: "light pink",
        colorcode: "#ffcdcb"
    },
    {
        Colorname: "red",
        colorcode: "#ff4040"
    },
    {
        Colorname: "yellow",
        colorcode: "#f2ba49"
    },
    {
        Colorname: "teal",
        colorcode: "#008080"
    },
    {
        Colorname: "blue",
        colorcode: "#add8e6"
    },
    {
        Colorname: "Dark blue",
        colorcode: "#3498DB"
    },
    {
        Colorname: "purple",
        colorcode: "#C39BD3"
    },
    {
        Colorname: "dark brown",
        colorcode: "#964B00"
    },
    {
        Colorname: "Orange",
        colorcode: "#E67E22"
    },
    {
        Colorname: "light brown",
        colorcode: "#F5CBA7"
    }

]
class ColorPopper extends Component {

    constructor(props) {
        super(props)

        this.state = {
            popperBool: this.props.popperBool,
            anchorEl: this.props.anchor,
            dashboardBool:this.props.dashboardBool
        }
    }

    colorClicked = (index) => {
     
        // console.log("color clicked ",this.props.dashboardBool);
        
        if(this.state.dashboardBool=== false){

            this.props.dashboardNote(colors[index].colorcode)
        }
        else{

        var obj = {
            noteIdList:[this.props.cardProps.noteItems.id],
            color:colors[index].colorcode
        }

        
        SerObj.colorChange(obj, (error, result) => {

            if (result){
         

                this.props.changeColor(colors[index].colorcode)
                
            }
            //  this.setState({popperBool:false})
        })
    }
    }

    render() {


        const colorPlate = colors.map((item, index) => {
   

            return (
                
                <div key={index} id="colormargin" >
                    <Tooltip title={item.Colorname}>

                        <IconButton style={{ backgroundColor: item.colorcode }}
                         onClick={event => this.colorClicked(index)}>
                        </IconButton>

                    </Tooltip>

                </div>

            )
        })
        return (



            <div >

                <div>
                    <Popper id="colorPopper" open={this.state.popperBool}
                        anchorEl={this.state.anchorEl} transition placement="bottom-start">

                        {colorPlate}

                    </Popper>

                </div>


            </div>
        )
    }
}

export default ColorPopper