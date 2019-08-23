import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
// import { Link } from 'react-router-dom'
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'
import { compose } from "redux";
import { chapterActions } from '../../../actions'

const style = theme => ({
    root: {
        background: '#f6f7fb', 
        height: '100%', 
        width: '100%', 
        paddingTop: 150
    },
    bg: {
        // background: '#f6f7fb',
        paddingBottom: 70,
        minHeight: '100%'
    },
    gridCard: {
        marginTop: 20,
        background: '#f6f7fb',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '1px 1px 3px 4px #aaaaaa',
        padding: 30,
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
    button: {
        margin: theme.spacing(1),
        marginLeft: 0,        
        width: '30%',
        background: '#6ac142',
        marginTop: 40,
        padding: 10
    },
    contentPart: {
        display: 'block', 
        background: '#f5f5f5', 
        border: '1px solid #ddd',
        width: '100%',
    },
    question: {
        padding: 20,
        display: 'flex'
    }
})

class CreateChapter extends Component {
    constructor(props) {
        super(props)
        this.state={
            title: '',
            description: '',
            submitted: false
        }
    }

    componentDidMount() {
        this.props.dispatch(chapterActions.getAll(this.props.location.state.course))
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ submitted: true })
        const { title, description } = this.state
    
        if( title && description ) {
          this.props.dispatch(chapterActions.createChapter(title, description, this.props.location.state.course.id))
        }
    }

    render() {
        const { classes } = this.props
        const { chapters } = this.props
        const { title, description, submitted } = this.state
        return (
            <div className={classes.root}>
                <Grid container className={classes.bg}>
                    <Grid item xs={12} sm={8} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{display:'flex', direction: 'rtl', marginLeft: 'auto', alignItems: 'baseline'}}>
                            <i className="fa fa-plus-circle"></i>
                            <h4>إضافة وحدة جديدة في : لغة البرمجة جافا 1</h4>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} className={classes.gridCard}>
                        <Grid className={classes.paragraph}>
                            <form onSubmit={this.handleSubmit}>
                                <div style={{ textAlign: "right", paddingTop: 20 }}>
                                    <InputLabel>
                                        <h4 style={{color: '#343e51', fontSize: 20}}>title</h4>
                                    </InputLabel>

                                    <Input
                                        name="title"
                                        type="text"
                                        value={title}
                                        onChange={this.handleChange}
                                        style={{ width: "100%", background: 'white', height: 50}}
                                        className={classes.InputField}
                                        inputProps={{
                                            style: {
                                            textAlign: "right"
                                            }
                                        }}
                                    />

                                    {
                                        submitted&&!title&&
                                        <h4 style={{color: 'red', fontSize: 20}}>Title is required!</h4>
                                    }
                                </div>

                                <div style={{ textAlign: "right", paddingTop: 20 }}>
                                    <InputLabel>
                                        <h4 style={{color: '#343e51', fontSize: 20}}>description</h4>
                                    </InputLabel>

                                    <Input
                                        name="description"
                                        type="text"
                                        value={description}
                                        onChange={this.handleChange}
                                        style={{ width: "100%", background: 'white', height: 50}}
                                        className={classes.InputField}
                                        inputProps={{
                                            style: {
                                            textAlign: "right"
                                            }
                                        }}
                                    />
                                    {
                                        submitted&&!description&&
                                        <h4 style={{color: 'red', fontSize: 20}}>Description is required!</h4>
                                    }
                                </div>

                                <div style={{textAlign: 'center'}}>
                                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                        إرسال&nbsp;<i className="fas fa-paper-plane"></i>
                                    </Button>
                                </div>
                            </form>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={8} style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>
                        <div style={{display: 'flex', fontSize: 14, color: '#333', paddingBottom: 10, direction: 'rtl', alignItems: 'center'}}>
                            <i style={{paddingLeft: 5}} className="fas fa-chevron-circle-right"></i>
                            <h6>رجوع</h6>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={8} style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>
                    <div style={{display: 'flex', direction: 'rtl', alignItems: 'baseline'}}>
                        <i className="fa fa-check-square"></i>&nbsp;
                        <h6>الوحدات التي قمت بإضافتها لهذه المادة :</h6>
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
                                                                    <i className="fas fa-list-alt"></i>
                                                                    <span style={{textDecoration: 'none', color: '#343e51', paddingLeft: 10}}>{chapter.title}{chapter.description}</span>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    {/* )
                                                })
                                            } */}
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                </Grid>
            </div>
        )
    }
}

// export default withStyles(style)(CreateChapter)


const mapStateToProps = state => {
    const { chapters, chapter } = state.chapterReducer
    console.log('chapter', chapter)
    return {
        chapters,
        chapter
    }
}

export default compose(withStyles(style), connect(mapStateToProps))(CreateChapter)