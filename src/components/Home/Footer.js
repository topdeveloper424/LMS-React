import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';

const style = theme => ({
    containerGrid: {
        padding: 0, 
        backgroundColor: '#1b202a'
    },
    groupGrid: {
        padding: 0, 
        display: 'flex', 
        paddingTop: 60, 
        paddingBottom: 30,
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        }
    },
    footerTxt: {
        textAlign: 'right',
        color: 'white',
        fontSize: 14,
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center',
            direction: 'rtl',
            paddingBottom: 50
        }
    },
    footerTxtUl: {
        listStyleType: 'none', 
        color: '#b2b6bb'        
    },
    footerTxtLi : {
        "&:hover": {
            color: '#6ac145'
        }
    }
})

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return(
            <Grid container className={classes.containerGrid}>   
                <Grid xs={12} item sm={12} className={classes.groupGrid}>
                    <Grid xs item sm={2} className={classes.footerTxt}>
                        <h5>
                            الجامعات
                        </h5>
                        <ul className={classes.footerTxtUl}>
                            <li className={classes.footerTxtLi}>جامعة الأميرة نورة</li>
                            <li className={classes.footerTxtLi}> جامعة الملك سعود</li>
                            <li className={classes.footerTxtLi}> جامعة الإمام</li>
                            <li className={classes.footerTxtLi}> جامعة الملك خالد</li>
                            <li className={classes.footerTxtLi}> كافة الجامعات </li>
                        </ul>
                    </Grid>
                    <Grid xs item sm={2} className={classes.footerTxt}>
                        <h5>
                            مقررات مميزة
                        </h5>
                        <ul className={classes.footerTxtUl}>
                            <li className={classes.footerTxtLi}>لغة البرمجة جافا 1</li>
                            <li className={classes.footerTxtLi}>تفاضل وتكامل 2</li>
                            <li className={classes.footerTxtLi}>تفاضل وتكامل 3</li>
                            <li className={classes.footerTxtLi}>هياكل البيانات</li>
                        </ul>
                    </Grid>
                    <Grid xs item sm={2} className={classes.footerTxt}>
                        <h5>
                            المقررات    
                        </h5>
                        <ul className={classes.footerTxtUl}>
                            <li className={classes.footerTxtLi}> كافة الأقسام</li>
                            <li className={classes.footerTxtLi}> علوم الحاسب</li>
                            <li className={classes.footerTxtLi}>الرياضيات</li>
                            <li className={classes.footerTxtLi}>الإحصاء</li>
                            <li className={classes.footerTxtLi}>الفيزياء</li>
                        </ul>
                    </Grid>
                    <Grid xs item sm={2} className={classes.footerTxt}>
                        <h5>
                            روابط مفيدة     
                        </h5>
                        <ul className={classes.footerTxtUl}>
                            <li className={classes.footerTxtLi}>بيانات السداد</li>
                            <li className={classes.footerTxtLi}>الشروط و الأحكام</li>
                            <li className={classes.footerTxtLi}>الأسئلة الشائعة</li>
                            <li className={classes.footerTxtLi}>التواصل مع الدعم الفني</li>
                        </ul>
                    </Grid>
                    
                    <Grid xs item sm={2} className={classes.footerTxt}>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/Footer.png`} alt="footer-logo-image" style={{width: 150}}/>
                        <ul className={classes.footerTxtUl}>
                            <li className={classes.footerTxtLi}>
                                <a style={{color: '#b2b6bb'}} href="https://t.me/VisionAcademy0"> <span>VisionAcademy0@</span></a>&nbsp;
                                <i className="far fa-paper-plane" aria-hidden="true"></i>
                            </li>
                            <li className={classes.footerTxtLi}>
                                <span>Support@VisionAcademy.online</span>&nbsp;
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                            </li>
                            <li className={classes.footerTxtLi}>
                                <span>السعودية - الرياض</span>&nbsp;
                                <i className="fas fa-map-marker" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid xs={12} item sm={12} style={{padding: 0, background: '#11141c', paddingTop: 8, paddingBottom: 8, textAlign: 'center'}}>
                    <span style={{color: '#59606a', fontSize: 14}}>
					    © 2018 VisionAcademy. All rights reserved.
                    </span>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(style)(Footer);
