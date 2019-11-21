import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../cssFiles/ForgotPassword.css'
import validate  from '../validations/validation'
const userService = require('../Services/Userservice')

class ForgotPassword extends Component {

    constructor(props){
        super(props)
    
        this.state = {
        "Email": "",
        "emailError":""
        }

    }

    changeBtn(event){
        this.setState ({
            [event.target.name] : event.target.value
        })

       
    }


    email(){

   
        
        const obj = validate.email(this.state.Email)
      
        const error = obj.error
        const boolval = obj.boolval

        this.setState({
            emailError: error
        })

        return boolval
    }

    submitBtn(event){

        let flag = false

        if(this.email()){
            flag = true
        }else{
            flag = false
        }

        let obj ={
            "email": this.state.Email,
            
        }

        // this.props.history.push("/ResetPass")
       if(!flag){
      
        userService.resetPass(obj,(error,result)=>{

            if(result){
                this.props.history.push("/ResetPass")
            }else{
                this.setState({
                    emailError: "email id may be incorrect please check your Email id"
                })
            }
        })

        
       }
        
       
        // this.props.props.history.push("/ResetPass")

    }


    render() {

        
        return (

            <div className="forgotContainer">

                <div className="forgotmainPart">

                    <div id="appTitle">
                        FundooApp
                 </div>
                    <div id="findTitle">
                        Find your Password
                 </div>

                    <div id="recoverEmail">

                        Enter your Email for recovery email
                </div>

                    <div id="EmailTextField">

                        <TextField
                            id="emailField"
                            label="Enter email"

                            name="Email"
                            value= {this.state.Email}
                            helperText= {this.state.emailError}
                            margin="normal"
                            onChange= {event => this.changeBtn(event)}
                            error={this.state.emailError}
                            variant="outlined" />

                    </div>

                    <div id = "submitBtnDiv">
                      
                        <button id = "submitBtn" onClick = {enevt => this.submitBtn(event)}>

                        Submit
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default ForgotPassword
