import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Button from "../CustomButtons/Button";
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Collapse } from 'reactstrap'

const styles = theme => ({
    headerTitle: {
        background: '#38393a',
        color: 'white',
        textAlign: 'center'
    },
    root: {
        display: 'flex',
        direction: 'rtl',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
            width: '100%'
        }
    },
    card: {
        maxWidth: 345,
        [theme.breakpoints.down("sm")]: {
            maxWidth: '100%',
        }
    },
    media: {
        height: 250,
    },
    socialIcons: {
        maxWidth: "24px",
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
    },
    tabRoot: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    videoGrid: {
        display: 'block',
        background: '#f6f7fb',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '1px 1px 3px 4px #f6f7fb',
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
            padding: 0,
        }
    },
    videoGridTitle: {
        fontSize: 24, 
        color: '#343e51', 
        textAlign: 'center', 
        border: '1px solid #eeeeee', 
        background: 'white',
        marginTop: 10,
        marginBottom: 10
    },
    paragraph: {
        paddingTop: 10,
        paddingBottom: 10,
        display: 'block',
        textAlign: 'right'
    },
    paragraphTitle: {
        display: 'block',
        // justifyContent: 'right',
        // alignItems: 'center',
        direction: 'rtl',
        fontSize: 18,
        lineHeight: 1.4,
        color: '#343e51',
        fontWeight: 500,
        borderBottom: '1px solid #aaaaaa',
    },
    contentPart: {
        display: 'block', 
        background: 'white', 
        borderBottom: '1px solid #dddddd'
    },
    topic: {
        padding: 20,
        direction: 'rtl',
        color: '#6ac145'
    },
    quiz: {   
        borderTop: '1px solid #dddddd', 
        padding: 20,
        direction: 'rtl',
        color: '#6ac145',
        background: '#f6f7fb',
    },
})

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        style={{border: '1px solid #aaaaaa'}}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

const uploadDatas = [
    {
        id: 1, 
        title: 'Introduction to OOP',
        contents: [
            {
                id: 1, topic: 'OOP, Class and Object', quiz: ''
            },
            {
                id: 2, topic: 'Quiz#1 - Objects & Classes', quiz: 'Quiz#1 - Objects & Classe'
            }
        ],
        collapsed: true
    },
    {
        id: 1, 
        title: 'Classes and Objects : Deeper Look',
        contents: [
            {
                id: 1, topic: 'Calling Constructors and ToString method', quiz: 'Quiz #6 : Overloading Constructors'
            },
            {
                id: 2, topic: 'this and static', quiz: 'Quiz #7 : Static'
            },
            {
                id: 3, topic: 'final', quiz: 'Quiz #8: Final Keyword'
            }
        ],
        collapsed: true
    },
]

class Course extends Component {
    constructor(props) {
        super(props)
        this.state={
            value: 0,
        }
    }

    handleChange = (event, value) => { 
        this.setState({
            value: value
        })
    }

    toggle = (index) => {
        uploadDatas[index].collapsed = !uploadDatas[index].collapsed
    }

    handleLink = () => {
        alert("You can't access!!!, please login")
        this.props.history.push('/login')
    }

    render() {

        const { classes } = this.props

        return (
            <div>
                <Grid container>
                    <Grid item xs={12} sm={12} className={classes.headerTitle}>
                        <h3>لغة البرمجة جافا 2</h3>
                    </Grid>
                    <Grid item xs={12} sm={12} className={classes.root}>
                        <Grid item xs={12} sm={2}>  
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={`${process.env.PUBLIC_URL}/assets/images/java.png`}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                                <CardContent style={{background: 'black', textAlign: 'center', borderBottom: '1px solid white'}}>
                                    <div className={classes.socialLine}>
                                        <Button
                                            justIcon
                                            href="#pablo"
                                            target="_blank"
                                            color="transparent"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <i style={{color: 'white'}} className={"fab fa-instagram"} />
                                        </Button>
                                        <Button
                                            justIcon
                                            href="#pablo"
                                            target="_blank"
                                            color="transparent"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <i style={{color: 'white'}} className={"fab fa-google-plus-g"} />
                                        </Button>
                                        <Button
                                            justIcon
                                            href="#pablo"
                                            target="_blank"
                                            color="transparent"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <i style={{color: 'white'}} className={"fab fa-twitter"} />
                                        </Button>
                                        <Button
                                            justIcon
                                            href="#pablo"
                                            target="_blank"
                                            color="transparent"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <i style={{color: 'white'}} className={"fab fa-facebook"} />
                                        </Button>
                                    </div>                                    
                                </CardContent>
                                <CardContent style={{display: 'flex', background: 'black', justifyContent: 'space-around'}}>
                                    <ul style={{listStyleType: 'none', 'textAlign': 'right', color: 'white', paddingRight: 0}}>
                                        <li>
                                            <i style={{color: '#6ac145'}} className="fas fa-graduation-cap"></i>م.نايف الشهري
                                        </li>
                                        <li>
                                            <i style={{color: '#6ac145'}} className="fa fa-money-bill"></i>500 ريال 
                                        </li>
                                        <li>
                                            <i style={{color: '#6ac145'}} className="fas fa-clock"></i>4 أشهر
                                        </li>
                                        <li>
                                            <i style={{color: '#6ac145'}} className="fas fa-edit"></i>واجبات
                                        </li>
                                    </ul>
                                    <ul style={{listStyleType: 'none', 'textAlign': 'right', color: 'white', paddingRight: 0}}>
                                        <li>
                                            <i style={{color: '#6ac145'}} className="fas fa-university"></i>جامعة الأميرة نورة
                                        </li>
                                        <li>
                                            <i style={{color: '#6ac145'}} className="fas fa-play-circle"></i>61  
                                        </li>
                                        <li>
                                            <i style={{color: '#6ac145'}} className="fas fa-calendar-alt"></i>2019 06 JAN  
                                        </li>
                                        <li>
                                            <i style={{color: '#6ac145'}} className="fas fa-code"></i>عملي  
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardActions style={{background: 'black', display: 'flex', justifyContent: 'center'}}>
                                    <div>
                                        <Typography style={{color: 'white', fontSize: 14}}>قم<Link to="/login" style={{color: '#6ac145'}}>بتسجيل الدخول</Link>للإنضمام إلى هذا المقرر</Typography>
                                    </div>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={10} className={classes.tabRoot}>
                            <AppBar position="static">
                                <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example" style={{border: '1px solid #ebebeb', background: '#f3f3f3', color: '#6ac142'}}>
                                    <Tab label="الوصف" {...a11yProps(0)} />
                                    <Tab label="المراجعات" {...a11yProps(1)} />
                                    <Tab label="التقييم" {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={this.state.value} index={0}>
                                Item One
                            </TabPanel>
                            <TabPanel value={this.state.value} index={1}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={this.state.value} index={2}>
                                Item Three
                            </TabPanel>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} className={classes.videoGrid}>
                        <Typography className={classes.videoGridTitle}>المحاضرات</Typography>
                        <Grid style={{background: ''}}>
                            {
                                uploadDatas.map((data, index) => {
                                    return (
                                        <Grid key={index} className={classes.paragraph}>
                                            <Grid className={classes.paragraphTitle}>
                                                &nbsp;&nbsp;<i className="fa fa-list"></i>&nbsp;&nbsp;
                                                <Link to="#" onClick={() => this.toggle(index)} data-target="#collapse" style={{textDecoration: 'none', color: '#343e51', fontSize: 18}}>{data.title}</Link>
                                                {
                                                    data.contents.map((content, idx) => {
                                                        return (
                                                            <Collapse isOpen={uploadDatas[index].collapsed} id="collapse" key={idx} className={classes.contentPart}>
                                                                <Grid className={classes.topic}>
                                                                    <i style={{paddingLeft: 10}} className="fas fa-play-circle"></i><Link onClick={this.handleLink} style={{textDecoration: 'none', color: '#6ac142'}}>{content.topic}</Link>
                                                                </Grid>
                                                                {
                                                                    content.quiz?
                                                                    <Grid className={classes.quiz}>
                                                                        {content.quiz}&nbsp;&nbsp;Q
                                                                    </Grid>: null
                                                                }
                                                            </Collapse>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Course)
