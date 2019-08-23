import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

import People from "@material-ui/icons/People";
// core components
import Button from "../CustomButtons/Button";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import CardFooter from "../Card/CardFooter";
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import loginPageStyle from "./loginPageStyle";

import { connect } from 'react-redux'
import { authActions } from '../../actions'
import { compose } from "redux";

const image = `${process.env.PUBLIC_URL}/assets/images/bg7.jpg`

class Login extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    
    this.props.dispatch(authActions.logout());

    this.state = {
      cardAnimaton: "cardHidden",
      email: '',
      password: '',
      submitted: false
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
  };

handleSubmit = e => {
    e.preventDefault()
    this.setState({ submitted: true })
    const { email, password } = this.state

    if( email && password ) {
      this.props.dispatch(authActions.login(email, password))
    }
    
    // this.props.history.push('/dashboard/my-courses')
    // this.props.history.push('/dashboard/teacher')
    // this.props.history.push('/dashboard/admin')
}
  render() {
    const { classes } = this.props;
    const { email, password, submitted } = this.state
    const { loggingIn } = this.props
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
                      <Link to="/"><img alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/assets/icons/Footer.png`} style={{width: 150}}/></Link>
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
                    </CardHeader>
                    {/* <p className={classes.divider}>Or Be Classical</p> */}
                    <CardBody>
                    <div style={{ textAlign: "right", paddingTop: 20}} className={(submitted&&!email?'has-error': '')}>
                        <InputLabel>
                           <h4 style={{color: 'rgb(156, 39, 176)', fontSize: 20}}>البريد الإلكتروني</h4>
                        </InputLabel>

                        <Input
                          name="email"
                          type="email"
                          value={this.state.email}
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
                          submitted&&!email&&
                          <h4 style={{color: 'red', fontSize: 20}}>Email is required!</h4>
                        }
                      </div>

                      <div style={{ textAlign: "right", paddingTop: 20 }} className={(submitted&&!email?'has-error': '')}>
                        <InputLabel>
                           <h4 style={{color: 'rgb(156, 39, 176)', fontSize: 20}}>كلمة المرور</h4>
                        </InputLabel>

                        <Input
                          name="password"
                          type="password"
                          value={this.state.password}
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
                          submitted&&!password&&
                          <h4 style={{color: 'red', fontSize: 20}}>Password is required!</h4>
                        }
                      </div>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" simple color="primary" size="lg" style={{width: '100%', background: '#9c27b0', color: 'white'}}>
                        تسجيل الدخول
                        {
                          loggingIn &&
                          <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="" />
                        }
                      </Button>
                    </CardFooter>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Link to="/register" style={{display: 'flex'}}>
                            <h6 className={classes.registerGo}>إنشاء حساب جديد</h6><People className={classes.inputIconsColor} />
                        </Link>
                        <Link to="/password/reset" style={{display: 'flex'}}>
                            <h6 className={classes.registerGo}>إنشاء حساب جديد</h6><Icon className={classes.inputIconsColor} >
                                lock_outline
                              </Icon>
                        </Link>
                    </div>
                    <Link to="/terms">
                        <h6 style={{fontSize: 14, textAlign: 'center', paddingTop: 20, paddingBottom: 20, color: '#9c27b0'}}>بتسجيلك الدخول فأنت توافق على جميع الشروط والأحكام</h6>
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

Login.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
  const { loggingIn, error } = state.authentication
  
  return {
    loggingIn,
    error
  }
}

// export default withStyles(loginPageStyle)(Login);
export default compose(withStyles(loginPageStyle), connect(mapStateToProps))(Login)
