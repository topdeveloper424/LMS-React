import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const style = theme => ({
    bg: {
        marginTop: 150,
        marginBottom: 150,
        marginLeft: 'auto', 
        marginRight: 'auto',
        width: '70%',
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
    },
    editor: {
        background: 'white',
        width: '95%'
    },
    toolbar: {
        width: '95%',
        direction: 'rtl'
    }
})

class AddTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.bg}>
                <div style={{display: 'flex', justifyContent:'flex-end', alignItems:'center', paddingBottom: 20, paddingRight: 10, fontSize: 24}}>
                    <h4>انشاء اختبار جديد</h4>
                    &nbsp;<i className="fa fa-edit"></i>
                </div>
                <div className={classes.gridCard}>
                    <form>
                        <Grid container className={classes.root}>
                            <Grid item xs={12} sm={12} align="right">
                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <i style={{color: '#6ac142'}} className="fas fa-map-pin"></i>&nbsp;
                                        <h5>العنوان</h5>&nbsp;*
                                    </InputLabel>

                                    <Input
                                        name=""
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
                                        <h5>إضافة الإختبار بعد المحاضرة :</h5>
                                    </InputLabel>

                                    <NativeSelect
                                        // value={this.state.university}
                                        // onChange={this.handleChange}
                                        style={{width: "95%", direction: 'rtl', background: 'white', height: 45}}
                                    >
                                        <option value={1}>السداد</option>
                                        <option value={2}>التفعيل</option>
                                        <option value={3}>شكوى من محاضر</option>
                                    </NativeSelect>
                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <i style={{color: '#6ac142'}} className="fas fa-redo"></i>
                                        <h5>عدد المحاولات</h5>&nbsp;*
                                    </InputLabel>

                                    <NativeSelect
                                        // value={this.state.university}
                                        // onChange={this.handleChange}
                                        style={{width: "95%", direction: 'rtl', background: 'white', height: 45}}
                                    >
                                        <option value={1}>مغلقة</option>
                                        <option value={2}>مفتوحة</option>
                                    </NativeSelect>
                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <i style={{color: '#6ac142'}} className="far fa-clock"></i>
                                        <h5>مدة الاختبار دقيقة</h5>&nbsp;*
                                    </InputLabel>

                                    <NativeSelect
                                        // value={this.state.university}
                                        // onChange={this.handleChange}
                                        style={{width: "95%", direction: 'rtl', background: 'white', height: 45}}
                                    >
                                        <option value={1}>مغلقة</option>
                                        <option value={2}>مفتوحة</option>
                                    </NativeSelect>
                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <i style={{color: '#6ac142'}} className="far fa-comment"></i>&nbsp;
                                        <h5>تعليمات الاختبار</h5>&nbsp;*
                                    </InputLabel>

                                    <TextField 
                                        name=""
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
                                       إرسال&nbsp;<i className="fa fa-save"></i>
                                    </Button>                                
                                </div>

                            </Grid>
                        </Grid>
                    </form>
                </div>
                <div onClick={this.props.history.goBack} style={{display: 'flex', justifyContent:'flex-end', alignItems:'center', paddingTop: 20, paddingRight: 10, fontSize: 24, color: '#6ac142'}}>
                    <h4>رجوع</h4>
                    &nbsp;<i className="fas fa-angle-double-right"></i>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(AddTest)

