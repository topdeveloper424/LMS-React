import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import ImageUploader from 'react-images-upload';

import { connect } from 'react-redux'
import { compose } from "redux";
import { departmentActions, universityActions, courseActions } from '../../../actions'
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
        minWidth: 1200,
        justifyContent: 'space-around',
        [theme.breakpoints.down("sm")]: {
            minWidth: 310
        }
    },
    inputLabel: {
        fontSize: 18,
        display: 'flex',
        direction: 'rtl',
        fontWeight: 900,
        color: 'black'
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: 0,        
        width: '92%',
        background: '#6ac142',
        marginTop: 40,
        padding: 10
    },
})

class CreateCourse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            university_id: '',
            department_id: '',
            courseName: '',
            old_price: '',
            price: '',
            description: '',
            logo_url: '',
            submitted:  false
        }
    }

    componentDidMount() {
        this.props.dispatch(departmentActions.getAll())
        this.props.dispatch(universityActions.getAll())
        this.props.dispatch(courseActions.getAll())
    }

    handleImageChange = async (e) => {
        await this.setState({
            logo_url: e.target.files[0]
        }) 
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true })

        const { university_id, department_id, courseName, description, price, old_price, logo_url} = this.state

        if( university_id && department_id && courseName && description && price && old_price && logo_url ) {

            let formData = new FormData()
            formData.append('university_id', university_id)
            formData.append('department_id', department_id)
            formData.append('name', courseName)
            formData.append('price', price)
            formData.append('old_price', old_price)
            formData.append('description', description)
            formData.append('logo_url', logo_url)
            this.props.dispatch(courseActions.createCourse(formData))
            
        }
    }

    render() {
        const { classes } = this.props
        const { universties, departments } = this.props
        return (
            <div className={classes.bg}>
                <div style={{display: 'flex', justifyContent:'flex-end', alignItems: 'center', paddingBottom: 20, paddingRight: 10}}>
                    <h3>إضافة مقرر جديد</h3>&nbsp;&nbsp;<i style={{fontSize: 22}} className="fas fa-plus"></i>
                </div>
                <div className={classes.gridCard}>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container className={classes.root}>
                            <Grid item xs={12} sm={6} align="right">

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <h4>Department</h4>*
                                    </InputLabel>

                                    <NativeSelect
                                        value={this.state.department_id}
                                        onChange={this.handleChange}
                                        name="department_id"
                                        style={{width: "95%", direction: 'rtl', background: 'white' }}
                                    >
                                        {
                                            departments&&departments.map((department, index) => {
                                                return (
                                                    <option key={index} value={index}>{department.name}</option>
                                                )
                                            })
                                        }
                                    </NativeSelect>
                                </div>

                                

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <h4>Course description</h4>*
                                    </InputLabel>

                                    <TextField 
                                        name="description"
                                        type="text"
                                        value={this.state.description}
                                        onChange={this.handleChange}
                                        variant="outlined" 
                                        style={{ width: '95%', background: 'white' }}
                                        inputProps={{
                                            style: {
                                                textAlign: "right",
                                                height: 115
                                            }
                                        }}
                                        multiline={true}
                                    />
                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <h4>Course Logo</h4>
                                    </InputLabel>

                                    <Input
                                        name="logo_url"
                                        type="file"
                                        // value={this.state.logo_url}
                                        onChange={this.handleImageChange}
                                        style={{ width: '95%' }}
                                        inputProps={{
                                            style: {
                                                direction: 'rtl',
                                                background: "white",
                                                height: 30
                                            }
                                        }}
                                    />

                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <Grid>
                                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                        {/* <Link to="" style={{color: 'white', textDecoration: 'none'}}> */}
                                            Send<i className="fa fa-save" aria-hidden="true"></i>
                                        {/* </Link> */}
                                        </Button>
                                    </Grid>
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={6} align="right">
                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <h4>Course Name</h4>*
                                    </InputLabel>

                                    <Input
                                        name="courseName"
                                        type="text"
                                        value={this.state.courseName}
                                        onChange={this.handleChange}
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
                                        <h4>University</h4>*
                                    </InputLabel>

                                    <NativeSelect
                                        value={this.state.university_id}
                                        onChange={this.handleChange}
                                        name="university_id"
                                        style={{width: "95%", direction: 'rtl', background: 'white' }}
                                    >
                                        {
                                            universties&&universties.map((university, index) => {
                                                return (
                                                <option key={index} value={index}>{university.name}</option>
                                                )
                                            })
                                        }
                                    </NativeSelect>
                                </div>

                                <div style={{paddingTop: 20, paddingRight: 20}}>
                                    <InputLabel className={classes.inputLabel}>
                                        <h4>Price</h4>*
                                    </InputLabel>

                                    <Input
                                        name="price"
                                        type="number"
                                        value={this.state.price}
                                        onChange={this.handleChange}
                                        style={{ width: '95%' }}
                                        placeholder=""
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
                                        <h4>Old Price</h4>*
                                    </InputLabel>

                                    <Input
                                        name="old_price"
                                        type="number"
                                        value={this.state.old_price}
                                        onChange={this.handleChange}
                                        style={{ width: '95%' }}
                                        placeholder=""
                                        inputProps={{
                                            style: {
                                                textAlign: "right",
                                                background: "white",
                                                height: 30
                                            }
                                        }}
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

// export default withStyles(style)(CreateCourse)

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

export default compose(withStyles(style), connect(mapStateToProps))(CreateCourse)