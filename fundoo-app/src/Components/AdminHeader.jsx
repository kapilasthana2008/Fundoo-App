
import React, { Component } from 'react'
import '../cssFiles/AdminHeader.css'

// defining custom class component..

class AdminHeader extends Component {

// render method..
    render() {
        return (
            
            <div className="adminHeaderContainer">

                <div id="Admin">

                    <div id = "adminImg">

                    </div>

                    <div id = "adminName">
                    kapil asthana
                    </div>

                </div>

                <div id="logout">
                   
                   <div id = "logoutBtn">
                   <button id = "btn">
                       logout
                   </button>
                {/* admin image */}
                   </div>
                </div>
            </div>
        )
    }

}


export default AdminHeader