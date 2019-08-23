import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Checkbox from "@material-ui/core/Checkbox";
// core components
import Button from "../CustomButtons/Button";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import CardFooter from "../Card/CardFooter";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import NativeSelect from '@material-ui/core/NativeSelect';

import loginPageStyle from "./loginPageStyle";

import { connect } from 'react-redux'
import { authActions, universityActions } from '../../actions'
import { compose } from 'redux'

const image = `${process.env.PUBLIC_URL}/assets/images/bg7.jpg`;

class Register extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      user: {
        name: '',
        email: '',
        password: '',
        university_id: '5'
      },
      submitted: false,
    };
  }
  
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.props.dispatch(universityActions.getAll())
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  handleChange = e => {
      const { name, value } = e.target
      const { user } = this.state
      this.setState({
          user: {
            ...user,
            [name]: value
          }
      })
  };

  handleSubmit = e => {
      e.preventDefault()
      this.setState({ submitted: true})
      const { user } = this.state
      if( user.name && user.email && user.password && user.university_id) 
      {
        this.props.dispatch(authActions.register(user))
      }
  }

  render() {
    const { classes } = this.props;
    const { registering } = this.props
    const { user, submitted } = this.state 
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            {
                submitted&&this.props.error&&
                <div style={{background: 'white', borderRadius: 5, border: '1px solid black', marginLeft: 'auto', marginRight: 'auto', padding: 20, width: '50%'}}>
                  <h4 style={{color: 'red', fontSize: 20, textAlign: 'center'}}>{this.props.error}</h4>
                </div>
            }
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                    <Link to="/">
                      <img
                        alt="Remy Sharp"
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/icons/Footer.png`}
                        style={{ width: 150 }}
                      />
                      </Link>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                      <h6 style={{ fontSize: 10 }}>
                        أنت على بعد خطوة واحدة فقط من النجاح ، قم الآن بإنشاء
                        حسابك
                      </h6>
                    </CardHeader>
                    {/* <p className={classes.divider}>Or Be Classical</p> */}
                    <CardBody>
                        <div style={{ textAlign: "right" }}>
                            <InputLabel>
                                <h4 style={{color: 'rgb(156, 39, 176)', fontSize: 20}}>الاسم</h4>
                            </InputLabel>

                            <Input
                                name="name"
                                type="name"
                                value={user.name}
                                onChange={this.handleChange}
                                // style={{ width: 325, border: "1px solid #aaaaaa" }}
                                className={classes.InputField}
                                inputProps={{
                                    style: {
                                    textAlign: "right"
                                    }
                                }}
                            />
                            {
                              submitted&&!user.name&&
                              <h4 style={{color: 'red', fontSize: 16}}>The name field is required</h4>
                            }
                        </div>

                      <div style={{ textAlign: "right", paddingTop: 20}}>
                        <InputLabel>
                           <h4 style={{color: 'rgb(156, 39, 176)', fontSize: 20}}>البريد الإلكتروني</h4>
                        </InputLabel>

                        <Input
                          name="email"
                          type="email"
                          value={user.email}
                          onChange={this.handleChange}
                          // style={{ width: 325, border: "1px solid #aaaaaa" }}
                          className={classes.InputField}
                          inputProps={{
                            style: {
                              textAlign: "right"
                            }
                          }}
                        />
                        {
                           submitted&&!user.email&&
                           <h4 style={{color: 'red', fontSize: 16}}>The email field is required</h4>
                        }
                      </div>

                      <div style={{ direction: "rtl", paddingTop: 20}}>
                        <InputLabel>
                           <h4 style={{color: 'rgb(156, 39, 176)', fontSize: 20, textAlign: 'right'}}>الجامعة</h4>
                        </InputLabel>

                        <NativeSelect
                            value={user.university_id}
                            onChange={this.handleChange}
                            name="university_id"
                            // style={{width: 325, direction: 'rtl', border: '1px solid #aaaaaa'}}
                            className={classes.InputField}
                        >
                        {
                          this.props.universties&&this.props.universties.map((university, index) => {
                            return (
                              <option key={index} value={index}>{university.name}</option>
                            )
                          })
                        }
                            {/* <option value={1}>جامعة الملك سعود</option>
                            <option value={2}>جامعة الأميرة نورة </option>
                            <option value={3}>جامعة الإمام </option>
                            <option value={4}>جامعة الملك عبدالعزيز</option>
                            <option value={5}>جامعة الملك خالد</option>
                            <option value={6}>جامعة الملك فهد</option>
                            <option value={7}>جامعة أم القرى</option>
                            <option value={8}>جامعة الطائف</option>
                            <option value={9}>جامعة طيبة</option>
                            <option value={10}>جامعة الأمير سطام</option>
                            <option value={11}>جامعة القصيم</option> */}
                            {/* <option value={11}>جامعة القصيم</option> */}
                            {/* <option value={12}>جامعة الدمام</option>
                            <option value={13}>جامعة نجران</option>
                            <option value={14}>جامعة جازان</option>
                            <option value={15}>جامعة شقراء</option>
                            <option value={16}>عام</option> */}
                        </NativeSelect>
                      </div>

                      <div style={{ textAlign: "right", paddingTop: 20}}>
                        <InputLabel>
                           <h4 style={{color: 'rgb(156, 39, 176)', fontSize: 20}}>كلمة المرور</h4>
                        </InputLabel>

                        <Input
                          name="password"
                          type="password"
                          value={user.password}
                          onChange={this.handleChange}
                          // style={{ width: 325, border: "1px solid #aaaaaa" }}
                          className={classes.InputField}
                          inputProps={{
                            style: {
                              textAlign: "right"
                            }
                          }}
                        />
                        {
                              submitted&&(!user.password||user.password.length<6)&&
                              <h4 style={{color: 'red', fontSize: 16}}>The password field is required</h4>
                        }
                      </div>

                    </CardBody>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Link to="/terms">
                        <h6
                          style={{
                            fontSize: 14,
                            textAlign: "center",
                            paddingTop: 20,
                            paddingBottom: 20,
                            color: "#9c27b0"
                          }}
                        >
                          بتسجيلك الدخول فأنت توافق على جميع الشروط والأحكام
                        </h6>
                      </Link>
                      <Checkbox
                        value="checkedC"
                        inputProps={{
                          "aria-label": "uncontrolled-checkbox"
                        }}
                      />
                    </div>
                    <CardFooter className={classes.cardFooter}>
                      <Button
                        simple
                        color="primary"
                        size="lg"
                        style={{
                          width: "100%",
                          background: "#9c27b0",
                          color: "white"
                        }}
                        type="submit"
                      >
                        إنشاء حسابك
                        {
                        registering && 
                          <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt=""/>
                        }
                      </Button>                      
                    </CardFooter>
                    <Link
                      to="/login"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: 25
                      }}
                    >
                      <h6 className={classes.registerGo}> بتسجيل الدخول </h6>
                      <People className={classes.inputIconsColor} />
                    </Link>
                  </form>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
  const { registering, error } = state.register
  const { universties } = state.universityReducer
  console.log("universties", universties)
  return { registering, error, universties}
}

// export default withStyles(loginPageStyle)(Register);
export default compose(withStyles(loginPageStyle), connect(mapStateToProps))(Register)
