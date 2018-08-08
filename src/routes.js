import React from 'react'
import { Switch, Route } from 'react-router-dom'

import EmployeeProfile from './components/EmployeeProfile/EmployeeProfile'
import Employer from './components/Employer/Employer'
import Home from './components/Home/Home'
import Jobs from './components/Jobs/Jobs'
import EmployeeList from './components/EmployeeList/EmployeeList';
import EditProfile from './components/EditProfile/EditProfile'
import SecretRoute from './components/Secretroute/SecretRoute';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <SecretRoute path='/employer' component={Employer} />
        <SecretRoute path='/employeeprofile/:user_id' component={EmployeeProfile} />
        <SecretRoute path='/editprofile' component={EditProfile} />
        <SecretRoute path='/employeelist' component={EmployeeList} />
        <SecretRoute path='/jobs' component={Jobs} />
    </Switch>
)