import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Input from "@material-ui/core/Input";
import { Link } from 'react-router-dom'

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
        marginLeft: 0
    },
    bg: {
        marginTop: 150,
        marginBottom: 300,
        marginLeft: 'auto', 
        marginRight: 'auto',
        [theme.breakpoints.down("sm")]: {
            marginTop: 100,
            marginBottom: 10,
            width: '90%'
        }
    },
    root: {
        minWidth: 600,
        display: 'block',
        [theme.breakpoints.down("sm")]: {
            minWidth: 310
        }
    }
})

class FrequentEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleClick = () => {
        this.props.history.push('/dashboard/admin/search-result')
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.bg}>
                <div style={{display: 'block', textAlign:'left', paddingBottom: 20}}>
                    <form>
                        <Grid container className={classes.root}>
                            <Grid style={{background: '#d6e9c6', padding: 10, marginBottom: 20, borderRadius: 10}}>
                                <h1 style={{color: '3c763d'}}>Ducplicated Login:</h1>
                            </Grid>
                            <Grid>
                                <Input
                                    name="email"
                                    type="email"
                                    // value={this.state.email}                                        
                                    // onChange={this.handleChange}
                                    style={{ width: '100%' }}
                                    placeholder="  Enter Email..."
                                    inputProps={{
                                        style: {
                                            // textAlign: "right",
                                            background: "white",
                                            height: 30,
                                            border: '0.5px solid #aaaaaa'
                                        }
                                    }}
                                />                            
                            </Grid>
                            <Grid>
                                <Button onClick={this.handleClick} variant="contained" color="secondary" className={classes.button}>
                                    Search
                                </Button>
                            </Grid>
                            <Grid>
                                <Link to="/dashboard/admin">
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Back
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(FrequentEntry)
