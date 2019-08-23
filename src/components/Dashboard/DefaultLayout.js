import React, { Component } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import withStyles from "@material-ui/core/styles/withStyles";

import DefaultHeader from './DefaultHeader'
import DefaultAside from './DefaultAside'
import Footer from '../Home/Footer'

// import routes from '../studentRoutes'
// import routes from '../teacherRoutes'
// import routes from '../adminRoutes'
import routes from '../mainRoutes'
import { createBrowserHistory } from "history";
import NotFound from '../NotFound';

const history = createBrowserHistory()

const style = theme => ({
    container: {
        // marginTop: 100
    }
})

class DefaultLayout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            desktopOpen: ''
        }
    }

    handleChangeAside = async (value) => {
        if(value === false) {
            await this.setState({
                desktopOpen: 'block'
            })
        } else {
            await this.setState({
                desktopOpen: 'none'
            })
        }
        console.log(this.state.desktopOpen)
    } 

    render() {
        const { classes } = this.props
        return (
            <div>
                <DefaultHeader handleChangeAside={this.handleChangeAside}/>
                <DefaultAside rtlActive={true} desktopOpen={this.state.desktopOpen} />
                <Grid container className={classes.container}>
                    <Switch history={history}>
                        {routes.map((route, idx) => {
                            return route.component ? (<Route key={idx} path={route.path} name={route.name} render={props => (
                                    <route.component {...props} />
                                )} />)
                                : null;
                            },
                        )}
                        <Route component={NotFound}/>
                    </Switch>
                </Grid>
                <Footer />
            </div>
        )
    }
}

// export default DefaultLayout
export default withStyles(style)(DefaultLayout);