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





class PopperComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            reminderBool: this.props.popperBool,
            remiderPoper: false,
            anchorEl: this.props.anchor
        }


    }

    render() {

        console.log("this.popper state", this.state);


        return (
            <div>
                <Popper id="ReminderPopper" open={this.state.reminderBool}
                    anchorEl={this.state.anchorEl} transition placement="top-start">


                    <Typography className="reminder-title">
                        <div id="reminder-tital">
                            Reminder:
                            </div>
                    </Typography>


                    <Typography className="later-today">
                        <div id="laterToday">
                            later today
                        </div>
                        <div id="time">
                            8:00 pm
                        </div>
                    </Typography>


                    <Typography className="later-today">

                        <div id="laterToday">
                            Tomorrow
                        </div>

                        <div id="time">
                            8:00 pm
                        </div>
                    </Typography>


                    <Typography className="later-today">
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


                        <ButtonBase className="pickDate">
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
            </div>
        )
    }

}

export default PopperComponent