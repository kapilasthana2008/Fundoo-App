// importing component required packages anf files..

import React, { Component } from 'react'
import LoginField from '../Components/LoginField'
import ResetPassword from '../Components/Resetpassword'
import '../cssFiles/SignInContainer.css'
import AdminDashboard from '../Components/AdminDashboard'

// defining custom component
class SignInContainer extends Component {


    render() {

        // returning screen view.
        return (

            <div className="body">

                <div className="mainContainer">

                    <div id="img">
                        Fundoo Application
                    </div>
                    <div id="signIn">
                        Sign in
                    </div>
                
                    <div id="headingAccount">
                        Use your Google Account
                    </div>
                    {/* calling LoginField component */}
                    <div className="loginDisp">
                        <LoginField props={this.props} />

                    </div>

                </div>
            </div>



        )
    }

}

export default SignInContainer