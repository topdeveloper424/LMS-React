import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

class AddSummary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.bg}>
                <div style={{display: 'flex', justifyContent:'flex-end', alignItems:'center',paddingBottom: 20, paddingRight: 10}}>
                    <h4>إضافة ملخص جديد</h4>&nbsp;
                    <i className="fa fa-edit"></i>
                </div>
                <div className={classes.gridCard}>
                    <form>
                        <Grid container className={classes.root}>
                            <Grid item xs={12} sm={12} align="right">
                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <i className="fa fa-pencil-alt"></i>&nbsp;
                                        <h4>العنوان</h4>&nbsp;*
                                    </InputLabel>

                                    <Input
                                        name="summaryTitle"
                                        type="text"
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
                                        <i className="fa fa-pencil-alt"></i>&nbsp;
                                        <h4>رابط الملف</h4>&nbsp;*
                                    </InputLabel>

                                    <Input
                                        name="summaryLink"
                                        type="text"
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
                                        <i className="fa fa-save"></i>&nbsp;
                                        <h4>الوصف</h4>&nbsp;*
                                    </InputLabel>

                                    <TextField 
                                        name="summaryDescription"
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
                                    <Button style={{background: '#6ac142', width: '95%', color: 'white', padding: 15}}>
                                        صفحة رفع الملفات&nbsp;<i className="fa fa-cloud-upload-alt"></i>
                                    </Button>
                                </div>

                                <div style={{paddingTop: 40, paddingRight: 20}}>
                                    <Button style={{background: '#6ac142', width: '95%', color: 'white', padding: 15}}>
                                        إرسال&nbsp;<i className="fas fa-paper-plane"></i>
                                    </Button>
                                </div>

                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(AddSummary)

