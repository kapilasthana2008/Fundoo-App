import React, { Component } from 'react'
import '../cssFiles/ResetPassword.css'
import TextField from '@material-ui/core/TextField';
import validate from '../validations/validation'
const userService = require('../Services/Userservice')
class ResetPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            "NewPassword": "",
            "passwordError": "",
            "confirmPasrd": "",
            "ConfirmPassError": ""
        }

    }

    async Input(event) {

        await this.setState({

            [event.target.name]: event.target.value
        })

    }


    password() {


        const obj = validate.password(this.state.NewPassword)
        const error = obj.error
        const boolval = obj.boolval

        this.setState({
            passwordError: error
        })

        return boolval
    }

    cnfPass() {
        if (this.state.NewPassword !== this.state.confirmPasrd) {
            this.setState({
                ConfirmPassError: "password not matched."
            })
            return true
        } else {
            this.setState({
                ConfirmPassError: ""
            })
            return false
        }

    }

    resetBtn(event) {

        let flag = false

        if (this.password()) {
            flag = true
        } if (this.cnfPass()) {
            flag = true
        }
        else {
            flag = false
        }

        let obj = {
            "NewPassword": this.state.NewPassword,
            
        }

        if (!flag) {

            userService.changePass(obj, (error, result) => {

                if (result) {
                    this.props.history.push("/")
                } else {
                    this.setState({
                        passwordError: "password not changed."
                    })
                }
            })

        }
        // this.props.history.push("/")


    }


    render() {

       

        return (



            <div className="Rcontainer">

                <div className="RpasswrdContainer">


                    <div id="img">

                        Fundoo Application
                        </div>

                    <div id="resetTitie">
                        Reset Your password
                    </div>
                    <div id="RPasswordField">

                        <TextField id="passworda"
                            label="Reset your Password"
                            type="password"
                            name="NewPassword"
                            value={this.state.NewPassword}
                            helperText={this.state.passwordError}
                            margin="normal"
                            onChange={event => this.Input(event)}
                            error={this.state.passwordError}
                            variant="outlined" />

                    </div>

                    <div id="confirmPasswordField">

                        <TextField id="passworda"
                            label="Confirm Password"
                            type="password"
                            name="confirmPasrd"
                            value={this.state.confirmPasrd}
                            helperText={this.state.ConfirmPassError}
                            margin="normal"
                            onChange={event => this.Input(event)}
                            error={this.state.ConfirmPassError}
                            variant="outlined" />

                    </div>

                    <div className="ResetBtn">

                        <button id="submitBtn" onClick={event => this.resetBtn(event)}>
                            Reset
                        </button>
                    </div>

                </div>

            </div>
        )
    }

}

export default ResetPassword