import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom'

const style = theme => ({
    bg: {
        marginTop: 150,
        marginBottom: 150,
        marginLeft: 'auto', 
        marginRight: 'auto',
        [theme.breakpoints.down("sm")]: {
            marginTop: 100,
            marginBottom: 10,
            width: '90%'
        }
    },
    gridCard: {
        background: '#f6f7fb',
        boxShadow: '1px 1px 3px 4px #eeeeee',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 50,
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
            padding: 0
        }
    },
    root: {
        minWidth: 600,
        justifyContent: 'space-around',
        [theme.breakpoints.down("sm")]: {
            minWidth: 310
        }
    },
    inputLabel: {
        fontSize: 16,
        display: 'flex',
        direction: 'rtl',
        fontWeight: 900,
        color: 'black'
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: 20,
        width: '95%',
        background: '#6ac145',
        marginLeft: 'auto',
        marginTop: 20,
        "&:hover": {
            background: 'grey'
        },
        [theme.breakpoints.down("sm")]: {
            width: '95%'
        }
    }
})

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.bg}>
                <div style={{display: 'block', textAlign:'center', paddingBottom: 20, paddingRight: 10}}>
                    <h3>التواصل مع الدعم الفني</h3>
                    <h6>اضغط هنا لقراءة الأسئلة الشائعة</h6>
                </div>
                <div className={classes.gridCard}>
                    <form>
                        <Grid container className={classes.root}>
                            <Grid item xs={12} sm={12} align="right">
                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <h4>الاسم</h4>&nbsp;*
                                    </InputLabel>

                                    <Input
                                        name="name"
                                        type="name"
                                        // value={this.state.name}
                                        // onChange={this.handleChange}
                                        style={{ width: '95%' }}
                                        inputProps={{
                                            style: {
                                                textAlign: "right",
                                                background: "white",
                                                height: 30
                                            }
                                        }}
                                    />
                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <h4>البريد الإلكتروني</h4>&nbsp;*
                                    </InputLabel>

                                    <Input
                                        name="email"
                                        type="email"
                                        // value={this.state.email}
                                        // onChange={this.handleChange}
                                        style={{ width: '95%' }}
                                        inputProps={{
                                            style: {
                                                textAlign: "right",
                                                background: "white",
                                                height: 30
                                            }
                                        }}
                                    />
                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <h4>نوع المشكلة</h4>&nbsp;*
                                    </InputLabel>

                                    <NativeSelect
                                        // value={this.state.university}
                                        // onChange={this.handleChange}
                                        style={{width: "95%", direction: 'rtl', background: 'white' }}
                                    >
                                        <option value={1}>السداد</option>
                                        <option value={2}>التفعيل</option>
                                        <option value={3}>شكوى من محاضر</option>
                                    </NativeSelect>
                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <h4>الرسالة</h4>&nbsp;*
                                    </InputLabel>

                                    <TextField 
                                        variant="outlined" 
                                        style={{ width: '95%', background: 'white' }}
                                        inputProps={{
                                            style: {
                                                textAlign: "right",
                                                height: 100
                                            }
                                        }}
                                        multiline={true}
                                    />
                                </div>

                                <div style={{paddingTop: 40, paddingRight: 20}}>
                                    <Grid className={classes.btn}>
                                        <Link to="" style={{color: 'white', textDecoration: 'none'}}>
                                            إرسال
                                        </Link>
                                    </Grid>
                                </div>

                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(Contact)

