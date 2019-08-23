import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const style = theme => ({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100px',
        direction: 'rtl',
        width: '80%',
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        }
    },
    media: {
      height: 200,
    },
    gridCard: {
        paddingLeft: 15, 
        paddingRight: 15, 
        marginBottom: 15,
        [theme.breakpoints.down("sm")]: {
            
        }
    },
    button: {
        margin: 0,
        width: '100%',
        background: '#6ac142'
    },
  });

const courses = [
    { 
        id: 1, 
        imgURL: `${process.env.PUBLIC_URL}/assets/images/java-programming.png`, 
        date: '2019 06 JAN', 
        subject: 'لغة البرمجة جافا 1', 
        graduate: 4,
        student: 13
    },
    { 
        id: 2, 
        imgURL: `${process.env.PUBLIC_URL}/assets/images/java.png`, 
        date: '2019 06 JAN', 
        subject: 'لغة البرمجة جافا 2', 
        graduate: 2,
        student: 4
    },
    { 
        id: 3, 
        imgURL: `${process.env.PUBLIC_URL}/assets/images/c.jpg`, 
        date: '2019 06 JAN', 
        subject: 'هياكل البيانات', 
        graduate: 1,
        student: 4
    },
    { 
        id: 4, 
        imgURL: `${process.env.PUBLIC_URL}/assets/images/database.png`, 
        date: '2019 06 JAN', 
        subject: 'أساسيات قواعد البيانات', 
        graduate: 5,
        student: 9
    },
    { 
        id: 5, 
        imgURL: `${process.env.PUBLIC_URL}/assets/images/operating-system.png`, 
        date: '2019 06 JAN', 
        subject: 'نظم التشغيل', 
        graduate: 0,
        student: 1
    },
    { 
        id: 6, 
        imgURL: `${process.env.PUBLIC_URL}/assets/images/java-programming1.png`, 
        date: '2019 06 JAN', 
        subject: 'برمجة حاسبات 1', 
        graduate: 3,
        student: 4
    },
    { 
        id: 7, 
        imgURL: `${process.env.PUBLIC_URL}/assets/images/java2.png`, 
        date: '2019 06 JAN', 
        subject: 'برمجة حاسبات 2', 
        graduate: 4,
        student: 4
    }
]

class Courses extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { classes } = this.props
        return (
            <Grid container className={classes.root}>
                {
                    courses.map((course, index) => {
                        return(
                            <Grid key={index} item xs={12} sm={3} className={classes.gridCard}>
                                <Link to={{
                                    pathname: `/dashboard/teacher/course/${course.id}`,
                                    state: {
                                        course: course
                                    }
                                }} style={{textDecoration: 'none'}}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={`${process.env.PUBLIC_URL}`+`${course.imgURL}`}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>

                                                <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', color: '#555555', fontSize: 14}}>
                                                    {course.date}
                                                </Typography>
                                                
                                                <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', color: '#555555', fontSize: 14}}>
                                                    {course.subject}
                                                </Typography>

                                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', color: '#333', fontSize: 14, paddingLeft: 15}}>
                                                        <i className="fa fa-graduation-cap"></i>
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', color: '#6ac142', fontSize: 14}}>
                                                        {course.graduate}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', color: '#555555', fontSize: 14}}>
                                                        /
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', color: 'red', fontSize: 14}}>
                                                        {course.student}
                                                    </Typography>
                                                </div>

                                            </CardContent>

                                            <Button variant="contained" color="secondary" className={classes.button}>
                                                <i className="fa fa-list"></i>استعراض
                                            </Button>
                                            
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
}

export default withStyles(style)(Courses)

