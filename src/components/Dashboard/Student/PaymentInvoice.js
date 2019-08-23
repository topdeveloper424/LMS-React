import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
// import { Link } from 'react-router-dom'

const style = theme => ({
    bg: {
        marginTop: 100,
        marginBottom: 100,
        marginLeft: 'auto', 
        marginRight: 'auto',
        [theme.breakpoints.down("sm")]: {
            marginTop: 30,
            marginBottom: 10
        }
    },
    gridCard: {
        marginTop: 100,
        background: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '1px 1px 3px 4px #aaaaaa',
        padding: 50,
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
        }
    },
    paragraph: {
        minWidth: 1000,
        [theme.breakpoints.down("sm")]: {
            minWidth: 310,
        }
    },
    paragraphTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        paddingBottom: 20,
        fontWeight: 'bold',
        "&:hover": {
            color: '#6ac145'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 22,
            color: '#6ac145',
        }
    },
    paragraphTxt: {
        direction: 'rtl',
        textAlign: 'center',
        lineHeight: 2,
        fontSize: 20,
        color: '#555555'
    },
})

class PaymentInvoice extends Component {
    render() {
        const { classes } = this.props
        return (
                <div className={classes.bg}>
                    <div className={classes.gridCard}>
                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                ( ارسال ايصال فاتورة السداد )&nbsp;<i style={{fontSize: 20, color:'#6ac145'}} className="fas fa-money-bill-wave"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                عند الرغبة بسداد الرسوم يجب تحويل رسوم المقرر على الحساب التالي 
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i className="fa fa-university" aria-hidden="true"></i>&nbsp;
                                البنك: الراجحي
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i className="fa fa-money-check-alt" aria-hidden="true"></i>&nbsp;
                                رقم الحساب : 321608010209551
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                                اسم صاحب الحساب: نايف عالي محمد الشهري
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                الأشخاص الذين سيقومون بالتحويل من بنوك أخرى يجب التحويل على رقم الآيبان التالي :
                            </Grid>
                            <Grid className={classes.paragraphTxt} style={{paddingBottom: 20, color: '#6ac145'}}>
                                SA85 8000 0321 6080 1020 9551
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                لا يوجد مقررات قمت بالتسجيل فيها حتى الآن
                            </Grid>
                        </Grid>
                    </div>
                </div>
        )
    }
}

export default withStyles(style)(PaymentInvoice)


