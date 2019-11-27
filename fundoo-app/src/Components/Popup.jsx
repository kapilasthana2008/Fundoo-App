import React, { Component } from 'react'
import '../cssFiles/PopUpContainer.css'
import ImageUploader from '../Components/ImageUploader'

class Popup extends Component {


    constructor(props){
        super(props)

        this.state = {
            imageSelectorPopUp:false
        }
    }


    // sign out function defined which will be pushed onto signIn page.
    signOut=()=>{

       
        localStorage.clear()
       
        // this.props.props.history.push("/")
        this.props.history.push("/")
    }


    profilePicSelector = ()=>{

        this.setState({
            imageSelectorPopUp:!this.state.imageSelectorPopUp
        }) 
    }

    render() {
        return (

            <div>
               
                <div className="ImgpopUpContainer">

                    <div id="profileImage" onClick = {this.profilePicSelector}>
                       <img src = {require('../assets/pic3.jpeg')} id = "profileIMg" />
                       <div id = "cameraIcon">
                    <img src = {require ('../assets/camera.svg')} id ="cameraIconImg"/>
                </div>
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

            {(this.state.imageSelectorPopUp) ? 
            <ImageUploader props = {this.state.imageSelectorPopUp}/>:""}
            </div>
        )
    }
}

export default Popup