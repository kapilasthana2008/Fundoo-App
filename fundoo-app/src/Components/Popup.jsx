import React, { Component } from 'react'
import '../cssFiles/PopUpContainer.css'

class Popup extends Component {


    // sign out function defined which will be pushed onto signIn page.
    signOut=()=>{

       
        localStorage.clear()
       
        // this.props.props.history.push("/")
        this.props.history.push("/")
    }

    render() {
        return (

            <div>
               
                <div className="popUpContainer">

                    <div id="profileImage">
                        {/* image */}
                    </div>

                    <div id="Username">
                    {localStorage.getItem('firstName')}
                     </div>

                    <div id="EmailId">
                       {localStorage.getItem('email')}
                    </div>
                </div>
            <div className = "signOutBtn">

                <div id = "signOutButton">
                <button id = "signOut" onClick = {this.signOut}>
                    Sign out
                </button>
                </div>
            </div>
            </div>
        )
    }
}

export default Popup