import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper';
import { TextField, Tooltip } from '@material-ui/core';
import '../cssFiles/DispalyNotes.css'
const service = require('../Services/ReminderServices')
var SerObj = new service.ReminderServices()

class PickDate_time extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pickDateBool: false,
            anchorEl: null,
            anchorEl2: null,
            anchorEl3: null,
            chipTimePopperBool: false,
            ChipTimePriorityPopper: false,
            priority: "Does not repeat",
            setTime: "8:00 PM",
            reminderValue: ""
        }
    }


    componentDidMount() {

        // let todayTime = new Date()

        // this.setState({
        //     setTime: todayTime,
        //     reminderValue: todayTime
        // })

    }


    backBtn = () => {

        this.setState({
            ChipTimePriorityPopper: false,
            chipTimePopperBool: false
        })

        this.props.changeAnchor()
    }

    // Mon Nov 25 2019 08:00:00 GMT+0530 (India Standard Time)

    selectDate = (event) => {

        console.log("date", event.currentTarget.defaultValue);

    }

    TimeSelect = (event) => {

        this.setState({
            anchorEl2: event.currentTarget,
            chipTimePopperBool: !this.state.chipTimePopperBool,
            ChipTimePriorityPopper: false
        })
    }


    TimePriority = (event) => {

        this.setState({
            anchorEl3: event.currentTarget,
            ChipTimePriorityPopper: !this.state.ChipTimePriorityPopper,
            chipTimePopperBool: false
        })
    }


    morning = () => {

        let morning = new Date()
        morning.setHours(8)
        morning.setMinutes(0)
        morning.setSeconds(0)

        let time = morning.toLocaleTimeString() + "AM"

        this.setState({
            setTime: time,
            chipTimePopperBool: false,
            reminderValue: morning
        })

    }
    afternoon = () => {
        let afternoon = new Date()
        afternoon.setHours(1)
        afternoon.setMinutes(0)
        afternoon.setSeconds(0)

        let time = afternoon.toLocaleTimeString() + "PM"

        this.setState({
            setTime: time,
            chipTimePopperBool: false,
            reminderValue: afternoon
        })
    }
    evening = () => {

        let eve = new Date()
        eve.setHours(6)
        eve.setMinutes(0)
        eve.setSeconds(0)

        let time = eve.toLocaleTimeString() + "PM"

        this.setState({
            setTime: time,
            chipTimePopperBool: false,
            reminderValue: eve
        })
    }
    night = () => {

        let night = new Date()
        night.setHours(8)
        night.setMinutes(0)
        night.setSeconds(0)

        let time = night.toLocaleTimeString() + "PM"

        this.setState({
            setTime: time,
            chipTimePopperBool: false,
            reminderValue: night
        })
    }


    save = () => {


        let value = {
            "reminder": [this.state.reminderValue],
            "noteIdList": [this.props.item.noteId]
        }

        console.log("value in pick&Date",value);
        
        if(this.state.reminderValue !== ""){
           
            SerObj.updateReminder(value, (error, result) => {

                if (result) {
                    console.log("result from pick",result);
                    
                    this.props.item.refreshReminder()
                }
            })

        }



    }



    render() {

        return (

            <div>

                <Popper open={this.props.bool}
                    anchorEl={this.props.anchor}
                    id="Chip-reminder"
                    placement="bottom-start">

                    <div id="chip-pickDate">

                        <Tooltip title="Go back" onClick={this.backBtn}>
                            <div id="backBtn">
                                <img src={require('../assets/backBtn.svg')} />
                            </div>
                        </Tooltip>
                        <div id="pickdate-font">Pick date & time</div>
                    </div>

                    <div id="Chip-line"></div>

                    <div id="chipCalender">

                        <TextField
                            id="date"
                            type="date"
                            defaultValue="2017-05-24"
                            onChange={this.selectDate}
                        />
                    </div>

                    <div id="chip-time" onClick={event => this.TimeSelect(event)}>
                        {this.state.setTime}
                    </div>

                    <div id="Chip-line2"></div>

                    <div id="chip-reminder-priority" onClick={event => this.TimePriority(event)}>
                        {this.state.priority}
                    </div>
                    <div id="Chip-line2"></div>

                    <div id="saveBtnDiv">
                        <div >
                            <button id="saveBtn" onClick={this.save}>Save</button>
                        </div>
                    </div>
                </Popper>

                <Popper open={this.state.chipTimePopperBool} id="chip-time-popper"
                    anchorEl={this.state.anchorEl2}>

                    <div id="morning" onClick={this.morning}>
                        <div id="mornig-title">Morning</div>
                        <div id="mornig-title">8:00 AM</div>
                    </div>

                    <div id="afternoon" onClick={this.afternoon}>
                        <div id="mornig-title">Afternoon</div>
                        <div id="mornig-title">1:00 AM</div>
                    </div>

                    <div id="evening" onClick={this.evening}>
                        <div id="mornig-title">Evening</div>
                        <div id="mornig-title"> 1:00 AM</div>
                    </div>
                    <div id="night" onClick={this.night}>
                        <div id="mornig-title">Night</div>
                        <div id="mornig-title">8:00 PM</div>
                    </div>

                    <div id="night">
                        <div id="mornig-title">Custom</div>
                    </div>

                </Popper>


                <Popper open={this.state.ChipTimePriorityPopper} id="chip-time-popper"
                    anchorEl={this.state.anchorEl3}>

                    <div id="morning">
                        <div id="mornig-title">Does not repeat</div>

                    </div>

                    <div id="afternoon">
                        <div id="mornig-title">Daily</div>

                    </div>

                    <div id="evening">
                        <div id="mornig-title">Evening</div>

                    </div>
                    <div id="night">
                        <div id="mornig-title">Weekly</div>
                    </div>

                    <div id="night">
                        <div id="mornig-title">Monthly</div>
                    </div>
                    <div id="night">
                        <div id="mornig-title">Yearly</div>
                    </div>

                </Popper>

            </div>
        )
    }
}

export default PickDate_time