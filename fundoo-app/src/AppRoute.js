import React, {Component} from 'react'
import {BrowserRouter ,Route,Link,Switch} from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword'
import SignInContainer from './Components/SignInContainer'
import Dashboard from './Components/Dashboard'
import CreateAccount from './Components/CreateAccount'
import Resetpassword from '../src/Components/Resetpassword'

const Router = ()=>(

    <BrowserRouter>
    <div>
    <switch>
        <Route  path = "/" component = {SignInContainer}  exact = {true}/>
        <Route path = "/Dashboard" component = {Dashboard} exact = {true}/>
        <Route path ="/ForgotPassword" component = {ForgotPassword} exact = {true}/>
        <Route path = "/CreateAccount" component = {CreateAccount} exact = {true}/>
        <Route path = "/ResetPass" component = {Resetpassword} exact = {true}/>
        
        </switch>
    
    </div>
        
</BrowserRouter>
)

   


export default Router