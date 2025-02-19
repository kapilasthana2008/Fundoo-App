import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import '../cssFiles/pickdate&time.css'
import { ButtonBase } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { typography } from '@material-ui/system';
import { object } from 'prop-types';
import PickDate_time from '../Components/PickDate_time'

const service = require('../Services/ReminderServices')
var SerObj = new service.ReminderServices()




class PopperComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            reminderBool: this.props.popperBool,
            remiderPoper: false,
            anchorEl: this.props.anchor,
            pickDate:false
        }


    }

    todayClicked = async () => {

        // let today = newDate.getDate();
        let today = new Date()
        today.setHours(8)
        today.setMinutes(0)
        today.setSeconds(0)



        let values = {
            "reminder": [today],
            "noteIdList": [this.props.noteId]
        }


        SerObj.updateReminder(values, (error, result) => {

            if (result) {

                this.props.refreshReminder()
            }
        })

        await this.setState({
            reminderBool: false
        })




    }

    tomorrowClicked = async () => {
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
           tomorrow.setHours(8)
           tomorrow.setMinutes(0)
           tomorrow.setSeconds(0)

        let values = {
            "reminder": [tomorrow],
            "noteIdList": [this.props.noteId]
        }

      
        SerObj.updateReminder(values, (error, result) => {

            if (result) {
                console.log("result for tomorrow",result);
                
                this.props.refreshReminder()
            }
        })

        await this.setState({
            reminderBool: false
        })

    }

    nextWeekClicked = async() => {

        const today = new Date()
        const nextweek = new Date(today)
        nextweek.setDate(nextweek.getDate() + 7)
        nextweek.setHours(8)
        nextweek.setMinutes(0)
        nextweek.setSeconds(0)

        let values = {
            "reminder": [nextweek],
            "noteIdList": [this.props.noteId]
        }

      
        SerObj.updateReminder(values, (error, result) => {

            if (result) {
                console.log("result for tomorrow",result);
                
                this.props.refreshReminder()
            }
        })
        await this.setState({
            reminderBool: false
        })
    }

    pickDate_time = ()=>{

        this.setState({
            pickDate: !this.state.pickDate,
            reminderBool:false
        })
    }

    changeAnchor = ()=>{

        this.setState({
            pickDate: false,
            reminderBool:true
        })
    }

    render() {

        console.log("this.popper state", this.state);
        return (
            <div>

                <Popper id="ReminderPopper" open={this.state.reminderBool}
                    anchorEl={this.state.anchorEl} transition placement="bottom-start">

                    <Typography className="reminder-title">
                        <div id="reminder-tital">
                            Reminder:
                            </div>
                    </Typography>

                    <Typography className="later-today" onClick={this.todayClicked}>
                        <div id="laterToday">
                            later today
                        </div>
                        <div id="time">
                            8:00 pm
                        </div>
                    </Typography>


                    <Typography className="later-today" onClick={this.tomorrowClicked}>

                        <div id="laterToday">
                            Tomorrow
                        </div>

                        <div id="time">
                            8:00 pm
                        </div>
                    </Typography>


                    <Typography className="later-today" onClick={this.nextWeekClicked}>
                        <div id="laterToday">
                            next week
                        </div>
                        <div id="time">
                            Mon,    8:00 pm
                        </div>
                    </Typography>


                    <Typography className="later-today">

                        <div id="laterToday">
                            Home
                        </div>
                    </Typography>

                    <Typography>

                        <ButtonBase className="pickDate" onClick={this.pickDate_time}>
                            <div id="watch">
                                <img id="watchImg" src={require('../assets/watch.svg')} />
                            </div>
                            <div id="pickdate">

                                pick Date & time
                        </div>
                        </ButtonBase>
                    </Typography>

                    <Typography>

                        <ButtonBase className="pick-place">

                            <div id="place">

                                <img id="placeimg" src={require('../assets/place.svg')} />
                            </div>

                            <div id="pickplace">

                                pick place
                        </div>
                        </ButtonBase>

                    </Typography>

                </Popper>
           
                <PickDate_time bool = {this.state.pickDate}
                    changeAnchor ={this.changeAnchor}
                    item = {this.props}
                anchor = {this.state.anchorEl}/>
            </div>
        )
    }

}

export default PopperComponent