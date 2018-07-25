import React from 'react'
import { Switch, Route } from 'react-router-dom'

import EmployeeProfile from './components/EmployeeProfile/EmployeeProfile'
import Employer from './components/Employer/Employer'
import Home from './components/Home/Home'
import Jobs from './components/Jobs/Jobs'
import EmployeeList from './components/EmployeeList/EmployeeList';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/employer' component={Employer} />
        <Route path='/employeeprofile' component={EmployeeProfile} />
        <Route path='/employeelist' component={EmployeeList} />
        <Route path='/jobs' component={Jobs} />
    </Switch>
)