import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';

import { Link } from 'react-router-dom'

const style = theme => ({
    bg: {
        marginTop: 150,
        marginBottom: 150,
        marginLeft: 'auto', 
        marginRight: 'auto',
        [theme.breakpoints.down("sm")]: {
            marginTop: 100,
            marginBottom: 10
        }
    },
    gridCard: {
        background: '#f6f7fb',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 50,
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
            padding: 0,
        }
    },
    root: {
        minWidth: 1200,
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]: {
            minWidth: 310
        }
    },
    gridSquare: {
        display: 'flex',
        justifyContent: 'center',
        // position: 'relative',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
            background: 'white'   
        }
    },
    gridSquareItem: {
        width: 'calc(100% / 4)',
        height: '220px',
        // position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        background: 'white',
        margin: 20,
        "&:hover": {
            boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        },
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            margin: 0,
            marginBottom: 20,
            background: '#f6f7fb',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
        }
    },
    item: {
        textAlign: 'center',
        "&:hover": {
            color: '#6ac145',
            textDecoration: 'none'
        },
        [theme.breakpoints.down("sm")]: {
            display: 'block',
            width: '100%',
            marginBottom: 10,
            // background: '#f6f7fb'
        }
    },
    itemIcon: {
        fontSize: 40,
        color: '#6ac145'
    },
    itemTxt: {
        fontSize: 18,
        color: '#555555',
        "&:hover": {
            color: '#6ac145'
        }
    }
})

class AddLecture extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { classes } = this.props
        const { course } = this.props.location.state
        return (
            <div className={classes.bg}>
                <Grid style={{justifyContent: 'center', display: 'flex', color: '#6ac142', fontSize: 24, alignItems:'center', marginBottom: 20}}>
                    <h4>اختار نوع المحاضرة</h4>&nbsp;<i class="far fa-clipboard"></i>
                </Grid>
                <div className={classes.gridCard}>
                    <Grid container className={classes.root}>
                        <Grid item xs={12} sm={12} className={classes.gridSquare}>
                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link to={{
                                         pathname: `/dashboard/course/${course.id}/add-lecture/text`,                                                                 
                                    }} 
                                    className={classes.item}
                              >
                                    <span className={classes.itemIcon}>  
                                        <i className="fas fa-pencil-alt" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        محاضرة نصية 
                                    </h4>
                               </Link>
                            </Grid>

                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link to={{
                                   pathname: `/dashboard/course/${course.id}/add-lecture/video`,
                               }} className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fas fa-video" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        فيديو مسجل 
                                    </h4>
                               </Link>
                            </Grid>
                            
                        </Grid>

                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(AddLecture)

