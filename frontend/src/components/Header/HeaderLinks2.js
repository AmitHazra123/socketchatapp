/*eslint-disable*/
import React, { useState } from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "../CustomButtons/Button.js";
import Float from "../FloatingButton/Float";

// styles
import styles from "../../assests/jss/user-kit/components/headerLinksStyle";

// connect to redux
import { connect } from "react-redux";

// redux action
import { logoutUser } from "../../actions/authAction";

const useStyles = makeStyles(styles);

const _handleLogout = props => {
  props.logoutUser();
};

function HeaderLinks2(props) {
  const classes = useStyles();
  const [direction, setDirection] = useState("");
  return (
    <List className={classes.list}>
      {
        (window.onscroll = () => {
          setDirection(window.oldScroll > window.scrollY ? "Up" : "Down");
          window.oldScroll = window.scrollY;
          if (window.scrollY == 0) setDirection("");
        })
      }
      {direction === "Down" ? (
        <Float direction="down" />
      ) : direction === "Up" ? (
        <Float direction="up" />
      ) : (
        ""
      )}
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={() => _handleLogout(props)}
        >
          Logout
        </Button>
      </ListItem>
    </List>
  );
}

export default connect(null, { logoutUser })(HeaderLinks2);
