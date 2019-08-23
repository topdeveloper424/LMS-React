import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'

import Home from './Home/Home'
import Login from './Auth/Login'
import Register from './Auth/Register'
import PasswordReset from './Auth/PasswordReset'
import Terms from './Auth/Terms'
import DefaultLayout from './Dashboard/DefaultLayout'
import Course from './Course/Course'
// import DepartmentCourse from './Dashboard/DepartmentCourse'
import { PrivateRoute }  from './PrivateRoute'
import NotFound from './NotFound'

import { history } from "../history";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <Switch history={history}>
          <PrivateRoute path="/dashboard" name="DefaultLayout" component={DefaultLayout}/>
          <Route path='/course/:id' exact name="Course" component={Course}/>
          <Route path="/login" exact name="Login" component={Login}/>
          <Route path="/register" exact name="Register" component={Register}/>
          <Route path="/password/reset" exact name="PasswordReset" component={PasswordReset}/>
          <Route path="/terms" exact name="Terms" component={Terms}/>
          <Route path="/" exact name="Home" component={Home}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
