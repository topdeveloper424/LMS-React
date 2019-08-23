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
            marginBottom: 10
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
            padding: 0,
            boxShadow: 'none'
        }
    },
    root: {
        minWidth: 1000,
        justifyContent: 'space-around',
        [theme.breakpoints.down("sm")]: {
            minWidth: 310
        }
    },
    inputLabel: {
        fontSize: 20,
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

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.bg}>
                <div style={{display: 'flex', justifyContent:'flex-end', alignItems: 'center', paddingBottom: 20, paddingRight: 10}}>
                    <h3>تعديل الملف الشخصي</h3>&nbsp;&nbsp;<i style={{fontSize: 22}} className="fas fa-edit"></i>
                </div>
                <div className={classes.gridCard}>
                    <form>
                        <Grid container className={classes.root}>
                            <Grid item xs={12} sm={6} align="right">
                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <i className="fab fa-twitter" aria-hidden="true"></i>&nbsp;<h4>حسابك في تويتر(اختياري) بدون @</h4>
                                    </InputLabel>

                                    <Input
                                        name="twitter"
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
                                        <i className="fab fa-telegram" aria-hidden="true"></i>&nbsp;<h4>حسابك في تيليقرام(اختياري)</h4>
                                    </InputLabel>

                                    <Input
                                        name="telegram"
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
                                        <i className="fa fa-image" aria-hidden="true"></i>&nbsp;<h4>صورة الملف الشخصي:</h4>
                                    </InputLabel>

                                    <Input
                                        name="telegram"
                                        type="file"
                                        // value={this.state.name}
                                        // onChange={this.handleChange}
                                        style={{ width: '95%' }}
                                        inputProps={{
                                            style: {
                                                textAlign: "right",
                                                background: "white",
                                                height: 18
                                            }
                                        }}
                                    />
                                </div>

                                <div style={{paddingTop: 40, paddingRight: 20}}>
                                    <Grid className={classes.btn}>
                                        <Link to="" style={{color: 'white', textDecoration: 'none'}}>
                                            حفظ<i className="fa fa-save" aria-hidden="true"></i>
                                        </Link>
                                    </Grid>
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={6} align="right">
                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <i className="fa fa-user" aria-hidden="true"></i>&nbsp;<h4>الاسم</h4>*
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
                                        <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;<h4>البريد الإلكتروني</h4>*
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
                                        <i className="fa fa-university" aria-hidden="true"></i>&nbsp;<h4>الجامعة</h4>*
                                    </InputLabel>

                                    <NativeSelect
                                        // value={this.state.university}
                                        // onChange={this.handleChange}
                                        style={{width: "95%", direction: 'rtl', background: 'white' }}
                                    >
                                        <option value="">جامعة الملك سعود</option>
                                        <option value={1}>جامعة الأميرة نورة </option>
                                        <option value={2}>جامعة الإمام </option>
                                        <option value={3}>جامعة الملك عبدالعزيز</option>
                                        <option value={4}>جامعة الملك خالد</option>
                                        <option value={5}>جامعة الملك فهد</option>
                                        <option value={6}>جامعة أم القرى</option>
                                        <option value={7}>جامعة الطائف</option>
                                        <option value={8}>جامعة طيبة</option>
                                        <option value={9}>جامعة الأمير سطام</option>
                                        <option value={10}>جامعة القصيم</option>
                                        {/* <option value={11}>جامعة القصيم</option> */}
                                        <option value={11}>جامعة الدمام</option>
                                        <option value={12}>جامعة نجران</option>
                                        <option value={13}>جامعة جازان</option>
                                        <option value={14}>جامعة شقراء</option>
                                        <option value={15}>عام</option>
                                    </NativeSelect>
                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <i className="fa fa-address-card" aria-hidden="true"></i>&nbsp;<h4>نبذة تعريفية عنك</h4>*
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
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(Profile)

