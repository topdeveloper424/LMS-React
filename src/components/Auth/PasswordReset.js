import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "../CustomButtons/Button";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import CardFooter from "../Card/CardFooter";
import { Grid } from '@material-ui/core';

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import loginPageStyle from "./loginPageStyle";

import { Link } from 'react-router-dom'

const image = `${process.env.PUBLIC_URL}/assets/images/bg7.jpg`

class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: ''
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
    const { email } = this.state
    console.log(email)
}
  render() {
    const { classes } = this.props;
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
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <Link to="/"><img alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/assets/icons/Footer.png`} style={{width: 150}}/></Link>
                      <h6 style={{ fontSize: 20, paddingTop: 20 }}>
                        إعادة تعيين كلمة المرور   
                      </h6>
                    </CardHeader>
        
                    <CardBody>
                    <div style={{ textAlign: "right", paddingTop: 20}}>
                        <InputLabel>
                           <h4 style={{color: 'rgb(156, 39, 176)', fontSize: 20}}>البريد الإلكتروني المسجل به</h4>
                        </InputLabel>

                        <Input
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          style={{ width: 325, border: "1px solid #aaaaaa" }}
                          inputProps={{
                            style: {
                              textAlign: "right"
                            }
                          }}
                        />
                      </div>

                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" simple color="primary" size="lg" style={{border: '1px solid #9c27b0', color: '#9c27b0'}}>
                        إرسال
                      </Button>
                    </CardFooter>
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

PasswordReset.propTypes = {
  classes: PropTypes.object
};

export default withStyles(loginPageStyle)(PasswordReset);
