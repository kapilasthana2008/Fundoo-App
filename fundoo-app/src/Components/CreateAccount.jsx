import React, { Component } from 'react'
import '../cssFiles/CreateAccount.css'
import TextField from '@material-ui/core/TextField';
import validate from '../validations/validation'
const userService = require('../Services/Userservice')


// defining custom class component..

class CreateAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            FirstName: "",
            nameError: "",
            LastName: "",
            LastNameError: "",
            userName: "",
            "userNameError": "",
            "password": "",
            "passwordError": "",
            "confrmPassword": "",
            "confrmPasswordError": ""
        }

    }

    /**
     *  defining an Input funtion which is same for all textfield
     *   defining function with async and inside state as await for set state
     *  */

    async Input(event) {

        await this.setState({

            [event.target.name]: event.target.value
        })

    }

    /** 
     * this function will call internnaly method fname and set state..
     * 
    */
    FirstName() {

        const obj = validate.fName(this.state.FirstName)
        const error = obj.error
        const boolval = obj.boolval

        this.setState({
            nameError: error
        })

        return boolval
    }
    /** 
 * this function will call internnaly  Lname method and set state..
 * 
*/
    lName() {


        const obj = validate.lName(this.state.LastName)
        const error = obj.error
        const boolval = obj.boolval

        this.setState({
            LastNameError: error
        })

        return boolval
    }
    /** 
    * this function will call internnaly email method and set state..
    * 
   */
    userName() {

        const obj = validate.email(this.state.userName)
        const error = obj.error
        const boolval = obj.boolval

        this.setState({
            userNameError: error
        })

        return boolval
    }
     /** 
    * this function will call internnaly password method and set state..
    * 
   */

    password() {

        const obj = validate.password(this.state.password)
        const error = obj.error
        const boolval = obj.boolval

        this.setState({
            passwordError: error
        })

        return boolval
    }

    /** 
    * this function will compare with the state.password 
    * if not same error will bs display
    * 
   */
    cnfPass() {
        if (this.state.password !== this.state.confrmPassword) {
            this.setState({
                confrmPasswordError: "password not matched."
            })
            return true
        } else {
            this.setState({
                confrmPasswordError: ""
            })
            return false
        }

    }

    /**
     *  defined RegisterBtn Function in that defined a flag which decide 
     *  final true or false if flag is flag then api will hit..
     */
    RegisterBtn(event) {

        let flag = false

        if (this.FirstName()) {
            flag = true
        }
        if (this.lName()) {
            flag = true
        }
        if (this.userName()) {
            flag = true
        }
        if (this.password()) {
            flag = true
        } if (this.cnfPass()) {
            flag = true
        }
        else {
            flag = false
        }

        
        const obj = {

            "firstName": this.state.FirstName,
            "lastName": this.state.LastName,
            "service": "basic",
            "email": this.state.userName,
            "password": this.state.password

        }
        // if flag not true then api will hit.
        if(!flag){

        userService.register(obj, (error, result) => {

            if (result) {

            }
        })
    }
    }

    render() {


        return (
            <div className="registerBody">

                <div className="restrationContainer">

                    <div className="part1">

                        <div id="title">Fundoo Application</div>

                        <div id="title">Create your Fundoo Account</div>

                        <div class="inputFields">

                            <div id="F-name">

                                <TextField id="nameField"
                                    label="First Name"
                                    type="text"
                                    name="FirstName"
                                    value={this.state.FirstName}
                                    helperText={this.state.nameError}
                                    onChange={event => this.Input(event)}
                                    error={this.state.nameError}
                                    margin="normal"
                                    variant="outlined" />

                            </div>
                            <div id="L-name">
                                <TextField id="lastField"
                                    label="Last Name"
                                    type="text"
                                    name="LastName"
                                    value={this.state.LastName}
                                    helperText={this.state.LastNameError}
                                    onChange={event => this.Input(event)}
                                    error={this.state.LastNameError}
                                    margin="normal"
                                    variant="outlined" />
                            </div>

                        </div>

                        <div id="userNameField">

                            <div id="userName">

                                <TextField id="userName"
                                    label="user Name"
                                    type="text"
                                    name="userName"
                                    value={this.state.userName}
                                    helperText={this.state.userNameError}
                                    onChange={event => this.Input(event)}
                                    error={this.state.userNameError}
                                    margin="normal"
                                    variant="outlined" />

                            </div>


                        </div>

                        <div id="currentTitle">
                            Use my current email address instead</div>
                        <div className="passwordDiv">

                            <div id="password">

                                <TextField id="paswdField"
                                    label="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    helperText={this.state.passwordError}
                                    onChange={event => this.Input(event)}
                                    error={this.state.passwordError}
                                    margin="normal"
                                    variant="outlined" />
                            </div>
                            <div id="CnfPassword">

                                <TextField id="cnfrnpassword"
                                    label=" Confirm Password"
                                    type="Password"
                                    name="confrmPassword"
                                    value={this.state.confrmPassword}
                                    helperText={this.state.confrmPasswordError}
                                    onChange={event => this.Input(event)}
                                    error={this.state.confrmPasswordError}
                                    margin="normal"
                                    variant="outlined" />
                            </div>
                            <div id="showPasswordIcon">
                                {/* ShowIcon */}
                            </div>

                        </div>


                        <div className="registerBtn">
                            <button id="Btn" onClick={event => this.RegisterBtn(event)}>
                                Register
                </button>
                        </div>
                    </div>

                    <div className="part2">

                        <img src={require('../assets/accountedit.png')} id="iconImg" />
                        <div id="message">One account. All of Google working for you.</div>
                    </div>


                </div>

            </div>
        )
    }
}

export default CreateAccount