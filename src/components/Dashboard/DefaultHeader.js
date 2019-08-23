import React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Avatar from '@material-ui/core/Avatar';
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "../Home/headerStyle";
import { Link } from 'react-router-dom'
import DefaultAside from './DefaultAside'

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      desktopOpen: false
    };
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  headerColorChange = () => {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }

  handleAside = async () => {
        await this.setState({
            desktopOpen: !this.state.desktopOpen
        })

        this.props.handleChangeAside(this.state.desktopOpen)
  }

  render() {
    const {
      classes,
      color,
    //   rightLinks,
      leftLinks,
      fixed,
      absolute
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });

    return (
      <AppBar className={appBarClasses} style={{paddingLeft: 0, paddingRight: 0, position: 'fixed'}}>
        <Toolbar className={classes.container}>
          {/* {leftLinks !== undefined ? brandComponent : null} */}
          <div className={classes.flex}>
            {leftLinks === undefined && (
              <Hidden smDown implementation="css">
                <Link to="#"><Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/assets/icons/logo.png`} className={classes.avatarImg} /></Link>
              </Hidden>
            )}
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Hidden smDown implementation="css">
                <i className="fas fa-bell" style={{paddingRight: 15, fontSize: 18}}></i>
            </Hidden>
            
            <Hidden smDown implementation="css">
                <i className="fas fa-envelope" style={{paddingRight: 15, fontSize: 18}}></i>
            </Hidden>

            <Hidden smDown implementation="css">
                <span style={{paddingRight: 10}}>James</span>
            </Hidden>

            <Hidden smDown implementation="css">
                <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/assets/images/slider4.png`}/>
            </Hidden>
            
            <Hidden smDown implementation="css">
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleAside}
                >
                    <Menu />
                </IconButton>
            </Hidden>
          </div>

          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
                <DefaultAside />
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

DefaultHeader.defaultProp = {
  color: "white"
};

DefaultHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default withStyles(headerStyle)(DefaultHeader);
