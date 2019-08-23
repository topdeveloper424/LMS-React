import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

const style = theme => ({
    bg: {
        paddingBottom: 100
    },
    gridCard: {
        marginTop: 150,
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
        paddingTop: 10,
        paddingBottom: 10
    },
    paragraphTitle: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        "&:hover": {
            color: '#6ac145'
        }
    },
    paragraphTxt: {
        direction: 'rtl',
        textAlign: 'right',
        lineHeight: 2
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: 20,
        width: '200px',
        background: '#6ac145',
        marginLeft: 'auto',
        marginTop: 20,
        "&:hover": {
            background: 'grey'
        },
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        }
    }
})

class MyCourses extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <Grid container className={classes.bg}>
                    <Grid item xs={12} sm={8} className={classes.gridCard}>
                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h3>مرحبا بك عزيزي في أكاديمية فجن ، حيث للتعليم معنًى آخر هنا.</h3>&nbsp;<i className="fas fa-spa"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                كن واثقًا أننا سنعمل معًا لتحدي الصعاب والوصول إلى الأهداف وتحقيق الطموحات التي تبدأ من الإهتمام بالتفاصيل الصغيرة وتنفيذها عزيزي الطالب يبدو أنك للتو قمت بالتسجيل أو ربما لا يوجد لديك مقررات قمت بالإنضمام لها حتى الآن إذا أردت أن تقوم باستعراض المقررات المطروحة ثم التسجيل بأحدها فقم بالضغط على الزر التالي
                            </Grid>
                            <Grid className={classes.btn}>
                                <Link to="/dashboard/departments" style={{color: 'white', textDecoration: 'none'}}>
                                    استعراض المقررات<i className="fa fa-eye" aria-hidden="true"></i>
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTxt}>
                                إذا كان لديك أي استفسار فسنكون سعيدين بخدمتك من خلال الإتصال من بنا من الرابط التالي وسنقوم بالرد عليك بأقرب وقت ممكن.
                            </Grid>
                            <Grid className={classes.btn}>
                                <Link to="/dashboard/contact" style={{color: 'white', textDecoration: 'none'}}>
                                    الدعم الفني<i className="fa fa-headset" aria-hidden="true"></i>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(style)(MyCourses)

