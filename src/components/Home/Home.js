import React, { Component } from 'react'
import Parallax from '../Parallax/Parallax'
import Header from './Header'
import HeaderLinks from './HeaderLinks'
import CourseCard from '../Course/CourseCard'
import Content from './Content'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux'
import { compose } from "redux";
import { departmentActions, universityActions, courseActions } from '../../actions'
import Footer from './Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// const courses = [
//     {
//         id:1, 
//         icon: `fas fa-desktop`, 
//         label:'علوم الحاسب', 
//         courseDetails: [
//             {id: 1, imgURL: `/assets/images/java.png`, term: 'م.نايف الشهري', title: 'لغة البرمجة جافا 2', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 2, imgURL: `/assets/images/c.jpg`, term: 'م.نايف الشهري', title: 'هياكل البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 3, imgURL: `/assets/images/database.png`, term: 'م.نايف الشهري', title: 'أساسيات قواعد البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 4, imgURL: `/assets/images/java2.png`, term:'م.نايف الشهري', title: 'برمجة حاسبات 2', date: '2019 06 JAN', logo: '/assets/images/75.jpg', logo_title: 'جامعة الملك سعود', cost: '500 ريال'}
//         ]
//     },
//     {
//         id:2, 
//         icon: `fas fa-calculator`, 
//         label:'الرياضيات', 
//         courseDetails: [
//             {id: 1, imgURL: `/assets/images/java.png`, term: 'م.نايف الشهري', title: 'لغة البرمجة جافا 2', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 2, imgURL: `/assets/images/c.jpg`, term: 'م.نايف الشهري', title: 'هياكل البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 3, imgURL: `/assets/images/database.png`, term: 'م.نايف الشهري', title: 'أساسيات قواعد البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 4, imgURL: `/assets/images/java2.png`, term:'م.نايف الشهري', title: 'برمجة حاسبات 2', date: '2019 06 JAN', logo: '/assets/images/75.jpg', logo_title: 'جامعة الملك سعود', cost: '500 ريال'}
//         ]
//     },
//     {
//         id:3, 
//         icon: `fas fa-chart-bar`, 
//         label:'الإحصاء', 
//         courseDetails: [
//             {id: 1, imgURL: `/assets/images/java.png`, term: 'م.نايف الشهري', title: 'لغة البرمجة جافا 2', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 2, imgURL: `/assets/images/c.jpg`, term: 'م.نايف الشهري', title: 'هياكل البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 3, imgURL: `/assets/images/database.png`, term: 'م.نايف الشهري', title: 'أساسيات قواعد البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 4, imgURL: `/assets/images/java2.png`, term:'م.نايف الشهري', title: 'برمجة حاسبات 2', date: '2019 06 JAN', logo: '/assets/images/75.jpg', logo_title: 'جامعة الملك سعود', cost: '500 ريال'}
//         ]
//     },
//     {
//         id:4, 
//         icon: `fas fa-magnet`, 
//         label:'الفيزياء', 
//         courseDetails: [
//             {id: 1, imgURL: `/assets/images/java.png`, term: 'م.نايف الشهري', title: 'لغة البرمجة جافا 2', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 2, imgURL: `/assets/images/c.jpg`, term: 'م.نايف الشهري', title: 'هياكل البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 3, imgURL: `/assets/images/database.png`, term: 'م.نايف الشهري', title: 'أساسيات قواعد البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 4, imgURL: `/assets/images/java2.png`, term:'م.نايف الشهري', title: 'برمجة حاسبات 2', date: '2019 06 JAN', logo: '/assets/images/75.jpg', logo_title: 'جامعة الملك سعود', cost: '500 ريال'}
//         ]
//     },
//     {
//         id:5, 
//         icon: `fas fa-language`, 
//         label:'اللغة الإنجليزية', 
//         courseDetails: [
//             {id: 1, imgURL: `/assets/images/java.png`, term: 'م.نايف الشهري', title: 'لغة البرمجة جافا 2', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 2, imgURL: `/assets/images/c.jpg`, term: 'م.نايف الشهري', title: 'هياكل البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 3, imgURL: `/assets/images/database.png`, term: 'م.نايف الشهري', title: 'أساسيات قواعد البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//         ]
//     },
//     {
//         id:5, 
//         icon: `fas fa-users`, 
//         label:'الدورات العامة', 
//         courseDetails: [
//             {id: 1, imgURL: `/assets/images/java.png`, term: 'م.نايف الشهري', title: 'لغة البرمجة جافا 2', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 2, imgURL: `/assets/images/c.jpg`, term: 'م.نايف الشهري', title: 'هياكل البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 3, imgURL: `/assets/images/database.png`, term: 'م.نايف الشهري', title: 'أساسيات قواعد البيانات', date: '2019 06 JAN', logo: '/assets/images/logo_card.png', logo_title: 'جامعة الأميرة نورة', cost: '500 ريال'},
//             {id: 4, imgURL: `/assets/images/java2.png`, term:'م.نايف الشهري', title: 'برمجة حاسبات 2', date: '2019 06 JAN', logo: '/assets/images/75.jpg', logo_title: 'جامعة الملك سعود', cost: '500 ريال'}
//         ]
//     }
// ]

const style = theme => ({
    grid: {
        // height: '220px',
        borderTop: '1px solid #ebebeb',
        borderBottom: '1px solid #ebebeb',
        position: 'relative',
        marginTop: '-12px',
    },
    gridItem: {
        width: 'calc(100% / 6)',
        height: '220px',
        borderRight: '1px solid #ebebeb',
        borderBottom: '1px solid #ebebeb',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        "&:hover": {
            borderRight: "2px solid #6ac142",
            borderTop: "2px solid #6ac142",
            borderLeft: '2px solid #6ac142',
            borderBottom: '2px solid #6ac142',
        },
        [theme.breakpoints.down("sm")]: {
            // width: '100%',
        }
    },
    item: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        "&:hover": {
            textDecoration: 'none'
        }
    },
    itemIcon: {
        color: "#6ac142",
        fontSize: 36,
        paddingBottom: 12
    },
    itemTxt: {
        fontSize: 16,
        lineHeight: 1.5,
        color: "#191919",
        "&:hover": {
            color: "#6ac142"
        }
    },
    courseGrid: {
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        }
    },
    titleGrid: {
        textAlign: "right", 
        paddingTop: 32,
        [theme.breakpoints.down("sm")]: {
            marginRight: 45,
            marginLeft: 45
        }
    },
    cardGroup: {
        paddingBottom: 50, 
        display: 'flex !important', 
        direction: 'rtl',
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        }
    }
})

class Home extends Component {

    constructor(props)
    {
        super(props)
        this.state={}
    }

    componentDidMount() {
        this.props.dispatch(departmentActions.getAll())
        this.props.dispatch(universityActions.getAll())
        this.props.dispatch(courseActions.getAll())
    }

    render() {
        const { classes, ...rest } = this.props;
        const { departments, universties, courses } = this.props
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
        return (
            <div>
                <Header 
                    color="transparent"
                    // routes={dashboardRoutes}
                    brand=""
                    leftLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                      height: 400,
                      color: "white"
                    }}
                    {...rest}
                />
                <Parallax image={`${process.env.PUBLIC_URL}/assets/images/bg-header-new.png`}>
                    <div style={{display: 'block', color: 'white', textAlign: 'center'}}>
                        <h1 style={{fontSize: 60, paddingBottom: 6, fontWeight: 400}}>أكاديمية فجن</h1>
                        <h3 style={{fontSize: 14, paddingBottom: 6, fontWeight: 300, lineHeight: 1.4}}>عندما يلتقي الإبداع بالكفاءة</h3>
                        <p style={{fontSize: 18, lineHeight: 1.7}}>خيارك الأول للتعليم عن بعد بكفاءة عالية</p>
                    </div>
                </Parallax>
                <div style={{zIndex: 100, position: 'relative', paddingTop: 12, background: 'white'}}>
                    <div>
                        <Grid container className={classes.grid}>
                            <Grid item xs={12} sm={2} className={classes.gridItem}>
                                <Link to="#" className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-signal" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        ضمان تحسين
                                        المستوى
                                    </h4>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={2} className={classes.gridItem}>
                                <Link to="#" className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-money-bill" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        رسوم        
                                        رمزية  
                                    </h4>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={2} className={classes.gridItem}>
                                <Link to="#" className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-graduation-cap" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        مراجعات وملخصات 
                                    </h4>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={2} className={classes.gridItem}>
                                <Link to="#" className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-star" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        محاضرين     
                                        محترفين
                                    </h4>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={2} className={classes.gridItem}>
                                <Link to="#" className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-video" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        تمارين واختبارات سابقة      
                                    </h4>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={2} className={classes.gridItem}>
                                <Link to="#" className={classes.item}>
                                    <span className={classes.itemIcon}>  
                                        <i className="fa fa-thumbs-up" aria-hidden="true" />
                                    </span> 
                                    <h4 className={classes.itemTxt}>
                                        كفاءة وجودة     
                                        عالية       
                                    </h4>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        {
                            departments&&departments.map((department, index) => {                                    
                                    return (
                                        <Grid key={index} container className={classes.courseGrid}>
                                            <Grid item xs></Grid>
                                            <Grid item xs={12} sm={8} className={classes.titleGrid}>
                                                <div style={{paddingBottom: 50}}>
                                                    <div style={{display:'flex', justifyContent: 'flex-end', paddingBottom: 22}}>
                                                        <h3 style={{color: '#343e51', lineHeight: 1.2, fontSize: 32, fontWeight: 'bold'}}>{department.name}&nbsp;</h3>
                                                        <span style={{color: '#343e51', lineHeight: 1.2, fontSize: 30, fontWeight: 'bold'}}>
                                                            {/* <i className={`${course.icon}`}></i> */}
                                                        </span>
                                                    </div>
                                                    <div style={{background: '#6ac142', height: 4, width: 70, marginLeft: 'auto'}}></div>
                                                </div>
                                                <Slider {...options}>
                                                    {/* <div className={classes.cardGroup} > */}
                                                        {
                                                            courses&&courses.map((course, idx) => {
                                                                if(department.id === course.department_id) {
                                                                    return (
                                                                        <div key={idx} className={classes.cardGroup}>
                                                                            {/* {
                                                                                department.id === course.department_id?
                                                                                <CourseCard course={course} universties={universties}/>:
                                                                                null
                                                                            } */}
                                                                            <CourseCard course={course} universties={universties}/>
                                                                        </div>
                                                                    )
                                                                }    
                                                            })
                                                        }
                                                    {/* </div> */}
                                                </Slider>
                                                <div style={{justifyContent: "center", display:'flex', alignItems: 'center'}}>
                                                    <span style={{fontSize: 20, lineHeight: 1.4}}>
                                                        المزيد من المقررات&nbsp;
                                                    </span>
                                                    <i className="fas fa-eye"></i>
                                                </div>
                                            </Grid>
                                            <Grid item xs></Grid>
                                        </Grid>
                                    )
                                })
                            })                        
                    </div>
                   <Content />
                </div>
                <Footer />
            </div>
        )
    }
}

// export default withStyles(style)(Home);
const mapStateToProps = state => {
    const { departments } = state.departmentReducer
    const { universties } = state.universityReducer
    const { courses } = state.courseReducer
    return {
        departments,
        universties, 
        courses
    }
}

export default compose(withStyles(style), connect(mapStateToProps))(Home)