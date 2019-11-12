import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import validate from '../validations/validation'
import { Link } from 'react-router-dom';
const userService = require('../Services/Userservice')

import '../cssFiles/LoginField.css'


class LoginField extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Email: "",
            emailError: "",
            Password: "",
            passwordError: ""
        }
    }

    /**
     *   created a function to take input by user.
     *   and set values into state
     * 
     * */
    async Input(event) {

        await this.setState({

            [event.target.name]: event.target.value
        })

    }

    // email validator 
    emailValidate() {

        const obj = validate.email(this.state.Email)
        const error = obj.error
        const boolval = obj.boolval

        this.setState({
            emailError: error
        })

        return boolval
    }

    // password validation
    passwordValidate() {

        const obj = validate.password(this.state.Password)

        const error = obj.error
        const boolval = obj.boolval

        this.setState({
            passwordError: error
        })

        return boolval
    }


    // submit button all fields will validatate.
    submitBtn(event) {

        let flag = false

        if (this.emailValidate()) {
            flag = true
        }
        else if (this.passwordValidate()) {

            flag = true
        }
        else {
            flag = false
        }

        const obj = {
            email: this.state.Email,
            password: this.state.Password
        }

        if(!flag){
            userService.login(obj, (error, result) => {

                if (result) {
    
                    console.log(result.data.id);
    
                    localStorage.setItem('firstName', result.data.firstName)
                    localStorage.setItem('email', result.data.email)
                    localStorage.setItem('token', result.data.id)
    
    
                    this.props.props.history.push('/Dashboard')
    
                }
                else {
                    this.setState({
                        emailError: "Couldn't find your mail id or password please try again"
                    })
                }
            })
        }
       

        // this.navigate(flag)


    }


    // rendering component
    render() {


        return (
            <div>
                <div className="EmailField">

                    <TextField id="email"
                        label="Email"

                        name="Email"
                        value={this.state.email}
                        helperText={this.state.emailError}
                        margin="normal"
                        onChange={event => this.Input(event)}
                        error={this.state.emailError}
                        variant="outlined" />
                </div>



                <div className="PasswordField">

                    <TextField id="passworda"
                        label="Password"
                        type="password"
                        name="Password"
                        value={this.state.Password}
                        helperText={this.state.passwordError}
                        onChange={event => this.Input(event)}
                        error={this.state.passwordError}
                        margin="normal"
                        variant="outlined" />
                </div>
                <div id="forgotPassword">

                    <Link to="/ForgotPassword"> Forgot Password? </Link>

                </div>
                <div className="learnMore">
                    Not your computer? Use Guest mode to sign in privately.<br />
                    <a
                        href="https://support.google.com/chrome/answer/6130773?hl=en-GB">
                        Learn More</a>

                    <div className="createAcnt">

                        <div id="create">
                            <Link to="/CreateAccount"> Create Account </Link>

                        </div>

                        <div className="submitBtn">

                            <button id="submit" onClick={event => this.submitBtn(event)}>
                                Submit
                    </button>

                        </div>
                    </div>

                </div>
            </div>

        )
    }

}
export default LoginField;