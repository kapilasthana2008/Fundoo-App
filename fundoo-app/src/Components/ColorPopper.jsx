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
        Colorname: "red",
        colorcode: "#ffcdcb"
    },
    {
        Colorname: "orange",
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
        colorcode: "#00008b"
    },
    {
        Colorname: "purple",
        colorcode: "#6a0dad"
    },
    {
        Colorname: "brown",
        colorcode: "#964B00"
    }

]
class ColorPopper extends Component {

    constructor(props) {
        super(props)

        this.state = {
            popperBool: this.props.popperBool,
            anchorEl: this.props.anchor
        }
    }

    colorClicked = (index) => {

        // console.log("color states", this.props.cardProps.item.id);
     
        
        var obj = {
            noteIdList:[this.props.cardProps.item.id],
            color:colors[index].colorcode
        }

        console.log("color obj",obj);
        
        SerObj.colorChange(obj, (error, result) => {

            if (result){
         

                this.props.changeColor(colors[index].colorcode)
                
            }
            //  this.setState({popperBool:false})
        })
    }

    render() {

        const colorPlate = colors.map((item, index) => {
   

            return (
                <div key={index} id="colormargin" >
                    <Tooltip title={item.Colorname}>

                        <IconButton style={{ backgroundColor: item.colorcode }} onClick={event => this.colorClicked(index)}>

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