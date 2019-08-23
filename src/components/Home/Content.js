import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { Grid } from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const style = theme => ({
    gridContent: {
        paddingTop: 100
    },
    sliderImage: {
        width: 200, 
        height: 200, 
        borderRadius: '50%', 
        overflow: 'hidden', 
        border: '5px solid white',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

class Content extends Component {
    render() {
        const { classes } = this.props

        const options = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                  }
                }
              ]
        }

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                  }
                }
              ]
        };
        return (
            <div style={{paddingTop: 30}}>
                <Parallax
                    bgImage={`${process.env.PUBLIC_URL}/assets/images/graduation-students.jpeg`}
                    strength={600}
                >
                    <div style={{height: 300}}>

                    </div>
                </Parallax>

                <div style={{background: '#f1f1f1'}}>
                    <Grid container style={{justifyContent: 'center', paddingTop: 50, display: 'block'}}>
                        <Grid>
                            <h3 style={{fontSize: 36, textAlign: 'center'}}> المحاضرين</h3>
                        </Grid>
                        <Grid>
                            <div style={{background: '#6ac142', height: 4, width: 70, marginLeft: 'auto', marginRight: 'auto'}}></div>            
                        </Grid>
                    </Grid>
                    <Grid container className={classes.gridContent}>
                        <Grid xs item sm={2}></Grid>
                        <Grid xs={6} item sm={8}>
                            <Slider {...options}>
                                <div>
                                    <img className={classes.sliderImage} src={`${process.env.PUBLIC_URL}/assets/images/slider1.jpg`} alt="IMG"/>
                                </div>
                                <div>
                                    <img className={classes.sliderImage} src={`${process.env.PUBLIC_URL}/assets/images/slider2.jpeg`} alt="IMG"/>
                                </div>
                                <div>
                                    <img className={classes.sliderImage} src={`${process.env.PUBLIC_URL}/assets/images/slider3.jpeg`} alt="IMG"/>
                                </div>
                                <div>
                                    <img className={classes.sliderImage} src={`${process.env.PUBLIC_URL}/assets/images/slider4.png`} alt="IMG"/>
                                </div>
                                <div>
                                    <img className={classes.sliderImage}  src={`${process.env.PUBLIC_URL}/assets/images/slider4.png`} alt="IMG"/>
                                </div>
                                <div>
                                    <img className={classes.sliderImage}  src={`${process.env.PUBLIC_URL}/assets/images/slider4.png`} alt="IMG"/>
                                </div>
                                <div>
                                    <img className={classes.sliderImage} src={`${process.env.PUBLIC_URL}/assets/images/slider4.png`} alt="IMG"/>
                                </div>
                                <div>
                                    <img className={classes.sliderImage} src={`${process.env.PUBLIC_URL}/assets/images/slider4.png`} alt="IMG"/>
                                </div>
                            </Slider>
                        </Grid>
                        <Grid xs item sm={2}></Grid>
                    </Grid>

                    <Grid container className={classes.gridContent}>
                        <Grid xs item sm={2}></Grid>
                        <Grid xs={6} item sm={8}>
                            <Slider {...settings}>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/1.png`} alt="IMG"/>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/2.png`} alt="IMG"/>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/3.png`} alt="IMG"/>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/4.png`} alt="IMG"/>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/6.png`} alt="IMG"/>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/7.png`} alt="IMG"/>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/8.png`} alt="IMG"/>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/9.png`} alt="IMG"/>
                            </Slider>
                        </Grid>
                        <Grid xs item sm={2}></Grid>
                    </Grid>

                    <Grid container style={{justifyContent: 'center', paddingTop: 100, display: 'block'}}>
                        <Grid>
                            <h3 style={{fontSize: 36, textAlign: 'center'}}> القائمة البريدية</h3>
                        </Grid>
                        <Grid>
                            <h3 style={{fontSize: 18, textAlign: 'center'}}>اشترك الآن في القائمة البريدية للحصول على آخر العروض والمقررات المطروحة ومستجدات الأكاديمية</h3>
                        </Grid>
                        <Grid>
                            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 50, paddingBottom: 100}}>
                                <Button variant="contained" color="primary" style={{backgroundColor: '#6ac145', paddingLeft: 50, paddingRight: 50}}>اشتراك</Button>
                                <TextField 
                                    variant="outlined" 
                                    inputProps={{
                                        style: { textAlign: "right", width: 500 }
                                    }}/>
                                    
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(Content)