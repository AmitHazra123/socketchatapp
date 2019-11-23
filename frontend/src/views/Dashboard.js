// required react packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// core components
import Header from "../components/Header/Header";
import HeaderLinks2 from "../components/Header/HeaderLinks2";

// redux connection
import { connect, useSelector } from "react-redux";

// redux actions
import { insertChat, getAllChats } from "../actions/chatAction";

// material ui components
import { Typography, Grid, TextField, Fab, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { primaryColor, secondaryColor } from "../assests/jss/user-kit";

// socket utility to check database changes
// required socket.io for client library module to receive response
import connectSocket from "socket.io-client";

// require proxy for socket
import socketProxy from "../socketProxy";

const styles = {
  container: {
    height: 440,
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100
  },
  textField: {
    width: 1050
  },
  fab: {
    marginLeft: 20,
    background: primaryColor,
    color: "white",
    "&:hover": {
      background: secondaryColor
    }
  },
  root: {
    // padding: theme.spacing(3, 2)
  }
};

const useStyles = makeStyles(styles);

// connect to the backend socket
const socket = connectSocket(socketProxy);

function changeInDatabase(props) {
  socket.on("change", change => {
    props.getAllChats();
  });
}

function Dashboard(props) {
  useEffect(() => {
    props.getAllChats();
    changeInDatabase(props);
  }, []);

  // states
  const [content, setContent] = useState("");

  const { ...rest } = props;

  const classes = useStyles();

  const auth = useSelector(state => state.auth);
  const chat = useSelector(state => state.chat);

  useEffect(() => {
    // scroll down chatsection
    const element = document.getElementById("chatsection");
    if (element) {
      element.scrollTop = element.scrollHeight + 60;
    }
  }, [chat]);

  // event functions
  const _sendMessage = e => {
    e.preventDefault();
    if (content !== "") {
      const chat = {
        name: auth.user.name,
        content
      };
      // call redux action
      props.insertChat(chat);
      setContent("");
    }
  };

  const chatItems = [];

  for (let i = 0; i < chat.chats.length; i++) {
    // date calculation
    const date = new Date();
    const prevDate = new Date(chat.chats[i].date);
    const difference = date.getTime() - prevDate.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(difference / (1000 * 60)) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    if (chat.chats[i].name === auth.user.name) {
      chatItems.push(
        <div style={{ width: 1120 }}>
          <Paper
            style={{
              background: "yellow",
              width: 400,
              marginLeft: 700,
              marginBottom: 20
            }}
          >
            <Typography variant="subtitle1" component="h3">
              {chat.chats[i].name}
            </Typography>
            <hr />
            <Typography component="p">{chat.chats[i].content}</Typography>
            <hr />
            <Typography variant="subtitle1" component="h3">
              {days +
                " days " +
                hours +
                " hours " +
                minutes +
                " minutes " +
                seconds +
                " seconds ago"}
            </Typography>
          </Paper>
        </div>
      );
    } else {
      chatItems.push(
        <div style={{ width: 1120 }}>
          <Paper
            style={{
              width: 400,
              marginBottom: 20
            }}
          >
            <Typography variant="subtitle1" component="h3">
              {chat.chats[i].name}
            </Typography>
            <hr />
            <Typography component="p">{chat.chats[i].content}</Typography>
            <hr />
            <Typography variant="subtitle1" component="h3">
              {days +
                " days " +
                hours +
                " hours " +
                minutes +
                " minutes " +
                seconds +
                " seconds ago"}
            </Typography>
          </Paper>
          <br />
        </div>
      );
    }
  }

  return (
    <div>
      <Header
        brand="SwitchOn"
        rightLinks={<HeaderLinks2 from="component" />}
        fixed
        {...rest}
      />
      <div style={{ marginTop: 100 }}>
        <center>
          <Typography variant="h4">Welcome {auth.user.name}</Typography>
          <Typography variant="subtitle1">{auth.user.email}</Typography>
        </center>
      </div>
      <div className={classes.container}>
        <Grid container>
          <div
            id="chatsection"
            style={{ height: 385, width: 1160, overflowY: "scroll" }}
            onLoad={() =>
              (document.getElementById("chatsection").scrollTop = 100)
            }
          >
            {chatItems}
          </div>
          <Grid container item>
            <Grid item>
              <br />
              <TextField
                className={classes.textField}
                variant="outlined"
                label="Send a Message"
                name="content"
                value={content}
                onChange={e => setContent(e.target.value)}
              />
            </Grid>
            <Grid item>
              <br />
              <Fab
                aria-label="add"
                className={classes.fab}
                onTouchMove={() => alert("hello")}
                onClick={_sendMessage}
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  insertChat: PropTypes.func.isRequired,
  getAllChats: PropTypes.func.isRequired
};

export default connect(null, { insertChat, getAllChats })(Dashboard);
