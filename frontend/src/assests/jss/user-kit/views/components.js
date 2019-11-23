import { container } from "../../user-kit";
import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme();

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "bold",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "10px 0 0",
    textAlign: "center"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  inputbase: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "100px",
      marginRight: "100px"
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "200px",
      marginRight: "200px"
    }
  }
};

export default componentsStyle;
