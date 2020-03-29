import React from 'react';
import * as ROUTES from './components/constants/routes'
import {Switch, Route, Redirect} from 'react-router-dom';
import homePage from './components/home/homePage'
import MembersPage from './components/MembersPage'
import inboxPage from './components/inbox/inboxPage'
import MyWall from './components/my_wall/myWallPage'
import SignUpPage from './components/userAuth/SignUpPage'
import SignInPage from './components/userAuth/SignInPage'
import SignOutPage from './components/userAuth/SignOutPage'
import PasswordForgetForm from './components/userAuth/PasswordForgetPage'
import EditOpportunity from './components/my_wall/EditOpportunity'
import opportunitiesPage from './components/opportunities/opportunitiesPage'
import organisationsPage from './components/organisations/organisationsPage'
import ProfilePage from './components/profile/ProfilePage'
import socialwallPage from './components/social_wall/socialwallPage'
import FileUploadComponent from './components/profile/FileUploadComponent'

const Routes=()=> (
    <>
    <Switch>
    {/* Switch only finds 1 path */}
    {/* exact makes such that the path is exactly the same with the specified path */}
    {/* Difference between component and render. Better to use render if passing props in,
    as page will not be reuploaded. Otherwise no difference*/}
    <Route exact path={ROUTES.HOME} component={homePage} />
    <Route exact path={ROUTES.INBOX} component={inboxPage} />
    <Route exact path= {ROUTES.MY_WALL} component={MyWall} />
    <Route exact path={ROUTES.MY_WALL_EDIT} component={EditOpportunity} />
    <Route exact path= {ROUTES.OPPORTUNITIES} component={opportunitiesPage} />
    <Route exact path={ROUTES.ORGANISATIONS} component={organisationsPage} />
    <Route exact path={ROUTES.PROFILE} component={ProfilePage} />
    <Route exact path={ROUTES.SOCIAL_WALL} component={socialwallPage} />
    <Route exact path={ROUTES.FILE_UPLOAD} component={FileUploadComponent} />
    <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetForm} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.SIGN_OUT} component={SignOutPage} />
    <Route exact path={ROUTES.LANDING} component={MembersPage} />
    
    {/* <Route exact path='/dog/r' render={()=><Dog name 'Biscuits' />} /> */}

    {/* adding a 404 error route. Need a Switch for the path. Place the NotFound at the end */}
    <Redirect to='/' />
</Switch>
</>
)

export default Routes