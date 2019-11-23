import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword'
import SignInContainer from './Components/SignInContainer'
import Dashboard from './Components/Dashboard'
import CreateAccount from './Components/CreateAccount'
import Resetpassword from '../src/Components/Resetpassword'
import Trash from '../src/Components/Trash'
import ChildNotes from '../src/Components/ChildNotes'
import Archive_page from './Components/Archive_page';
import EditLabel from '../src/Components/EditLabel';
import Reminder from '../src/Components/Reminder'


const Router = () => (

    <BrowserRouter>
        <div>

            <switch>
                <Route path="/" component={SignInContainer} exact={true} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/ForgotPassword" component={ForgotPassword} exact={true} />
                <Route path="/CreateAccount" component={CreateAccount} exact={true} />
                <Route path="/ResetPass" component={Resetpassword} exact={true} />
                <Route path="/Dashboard/Notes" component={ChildNotes} exact={true} />
                <Route path="/Dashboard/Trash" component={Trash} />
                <Route path="/Dashboard/Archive" component={Archive_page} />
                <Route path="/Dashboard/EditLabel" component={EditLabel} />
                <Route path="/Dashboard/Reminder" component={Reminder} />
            </switch>

        </div>

    </BrowserRouter>
)




export default Router