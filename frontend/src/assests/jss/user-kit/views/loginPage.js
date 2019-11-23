import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

const signupPageStyle = {
  navbar: {
    background: "transparent",
    color: "black",
    boxShadow: "none"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "5vh"
  },
  textField: {
    [theme.breakpoints.up("lg")]: {
      width: 540
    },
    [theme.breakpoints.up("md")]: {
      width: 400
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 10,
      width: 350
    }
  },
  button: {
    boxShadow: "0px 15px 10px -10px rgba(0, 0, 0, 0.6)",
    transition: "all 200ms cubic-bezier(0.25, 0.39, 0.39, 2.01)",
    [theme.breakpoints.up("lg")]: {
      width: 540
    },
    [theme.breakpoints.up("md")]: {
      width: 400
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 10,
      width: 350
    },
    marginTop: 15,
    height: 50,
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 25px 15px -15px rgba(0, 0, 0, 0.3)"
    }
  },
  input: {
    display: "none"
  },
  typography1: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 110
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 180
    }
  },
  typography2: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 35
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 110
    }
  },
  root: {
    padding: theme.spacing(3, 2)
  }
};

export default signupPageStyle;
