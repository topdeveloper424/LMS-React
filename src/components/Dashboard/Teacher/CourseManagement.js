import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
// import InputLabel from "@material-ui/core/InputLabel";
// import Input from "@material-ui/core/Input";
// import NativeSelect from '@material-ui/core/NativeSelect';
// import TextField from '@material-ui/core/TextField';

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

class CourseManagement extends Component {

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
                <div className={classes.gridCard}>
                    <Grid container className={classes.root}>
                        <Grid item xs={12} sm={12} className={classes.gridSquare}>
                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link to={{
                                         pathname: `/dashboard/course/${course.id}/lectures`,
                                         state: {
                                             course: course
                                         }
                                    }} 
                                    className={classes.item}
                              >
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-graduation-cap" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        المحاضرات
                                    </h4>
                               </Link>
                            </Grid>

                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link to={{
                                   pathname: `/dashboard/course/${course.id}/add-summary`,
                                   state: {
                                       course: course
                                   }
                               }} className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fas fa-clipboard-list" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        إضافة ملخص    
                                    </h4>
                               </Link>
                            </Grid>

                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link to={{
                                   pathname: `/dashboard/course/${course.id}/quiz/add`,
                                   state: {
                                       course: course
                                   }
                               }} className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-edit" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        اختبار جديد    
                                    </h4>
                               </Link>
                            </Grid>

                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link to={{
                                   pathname: `/dashboard/course/${course.id}/add-lecture`,
                                   state: {
                                       course: course
                                   }
                               }} className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-play-circle" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        محاضرة جديدة 
                                    </h4>
                               </Link>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} className={classes.gridSquare}>
                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link 
                                to={{
                                    pathname: `/dashboard/course/${course.id}`,
                                    state: {
                                        course: course
                                    }
                                }} 
                                className={classes.item}
                               >
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-eye" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        تفاصيل المقرر   
                                    </h4>
                               </Link>
                            </Grid>

                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link to={{
                                         pathname: `/dashboard/course/${course.id}/add-unit`,
                                         state: {
                                             course: course
                                         }
                                    }}  className={classes.item}
                                >
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-plus-circle" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        إضافة وحدة جديدة   
                                    </h4>
                               </Link>
                            </Grid>

                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link to={{
                                   pathname: `/dashboard/course/${course.id}/summaries`,
                                   state: {
                                       course: course
                                   }
                               }} className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-level-down-alt" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        الملخصات  
                                    </h4>
                               </Link>
                            </Grid>

                            <Grid item xs={12} sm={3} className={classes.gridSquareItem}>
                               <Link to="" className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fab fa-quora"></i>
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        الإختبارات   
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

export default withStyles(style)(CourseManagement)

