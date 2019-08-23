import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import headerLinksStyle from "./headerLinksStyle"

class HeaderLinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
  const { classes } = this.props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to='/register' className={classes.listItemText}>
            إنشاء حساب
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        &nbsp;&nbsp;|&nbsp;&nbsp;
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to='/login' className={classes.listItemText}>
            دخول
        </Link>
      </ListItem>
    </List>
  );
}
}

export default withStyles(headerLinksStyle)(HeaderLinks);
