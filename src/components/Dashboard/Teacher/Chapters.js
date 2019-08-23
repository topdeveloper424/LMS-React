import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
import { Collapse } from 'reactstrap'
import { connect } from 'react-redux'
import { compose } from "redux";
import { chapterActions } from '../../../actions'

// import { Link } from 'react-router-dom'

const style = theme => ({
    bg: {
        // background: '#f6f7fb',
        paddingBottom: 70,
        minHeight: '100%'
    },
    gridCard: {
        marginTop: 70,
        // background: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        // boxShadow: '1px 1px 3px 4px #aaaaaa',
        padding: 30,
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
        }
    },
    paragraph: {
        paddingTop: 10,
        paddingBottom: 10,
        display: 'block',
        textAlign: 'right'
    },
    paragraphTitle: {
        display: 'block',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        fontSize: 18,
        lineHeight: 1.4,
        color: '#343e51',
        fontWeight: 500,
    },
    contentPart: {
        display: 'block', 
        background: '#f5f5f5', 
        border: '1px solid #ddd'
    },
    question: {
        padding: 20,
        direction: 'rtl',
        display: 'flex',
        justifyContent: 'space-between'
    },
    answer: {   
        borderTop: '1px solid #dddddd', 
        padding: 20,
        direction: 'rtl',
        color: '#6ac145'
    },

})


class Chapters extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chapters: []
        }
    }

    toggle = (index) => {
        // this.props.chapters[index].collapsed = this.props.chapters[index].collapsed
        // console.log(this.props.chapters[index].collapsed)

    }

    componentDidMount() {

        this.props.dispatch(chapterActions.getAll(this.props.location.state.course))
    }

    render() {
        const { classes } = this.props
        const { chapters } = this.props
        let { course } = this.props.location.state
        return (
            <div style={{background: '#f6f7fb', height: '100%', width: '100%'}}>
                <Grid container className={classes.bg}>
                    <Grid item xs={12} sm={8} className={classes.gridCard}>
                        <div style={{display: 'flex', fontSize: 20, color: '#333', paddingBottom: 10, direction: 'rtl', alignItems: 'center'}}>
                            <i style={{paddingLeft: 5}} className="fas fa-list-alt"></i>
                            <h4>{course.subject}</h4>
                        </div>
                        <div style={{display: 'flex', fontSize: 14, color: '#333', paddingBottom: 10, direction: 'rtl', alignItems: 'center'}}>
                            <i style={{paddingLeft: 5}} className="fas fa-chevron-circle-right"></i>
                            <h6>رجوع</h6>
                        </div>
                        {
                            chapters&&chapters.map((chapter, index) => {
                                return (
                                    <Grid key={index} className={classes.paragraph}>
                                        <Grid className={classes.paragraphTitle}>
                                            {/* {
                                                chapter.contents.map((content, idx) => {
                                                    return ( */}
                                                        <Grid className={classes.contentPart}>
                                                            <Grid className={classes.question}>
                                                                <div>
                                                                    <i style={{paddingLeft: 10}} className="fas fa-list-alt"></i>
                                                                    <span onClick={() => this.toggle(index)} data-target="#collapse" style={{textDecoration: 'none', color: '#343e51'}}>{chapter.title}{chapter.description}</span>
                                                                </div>
                                                                <div style={{direction: 'initial', textAlign:'left'}}>
                                                                    <i className="fa fa-trash"></i>
                                                                    <i style={{paddingLeft: 5}} className="fa fa-edit"></i>
                                                                    <i style={{paddingLeft: 5}} className="fa fa-save"></i>
                                                                    <input 
                                                                        type="number" 
                                                                        style={{width: "20%", direction: 'rtl', marginLeft: 5, border: '0px', background: 'white'}}
                                                                    />
                                                                </div>
                                                            </Grid>
                                                            <Collapse isOpen={chapter.collapsed} id="collapse" className={classes.answer}>
                                                                <i style={{color: 'black', paddingLeft: 10}} className="fa fa-check"></i>{course.student}
                                                            </Collapse>
                                                        </Grid>
                                                    {/* )
                                                })
                                            } */}
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                        <div style={{display: 'flex', fontSize: 14, color: '#333', paddingBottom: 10, direction: 'rtl', alignItems: 'center'}}>
                            <i style={{paddingLeft: 5}} className="fas fa-chevron-circle-right"></i>
                            <h6>رجوع</h6>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

// export default withStyles(style)(Chapters)

const mapStateToProps = state => {
    const { chapters, course } = state.chapterReducer
    
    return {
        chapters,
        course
    }
}

export default compose(withStyles(style), connect(mapStateToProps))(Chapters)

