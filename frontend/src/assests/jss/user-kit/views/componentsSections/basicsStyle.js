import { container, title } from "assets/jss/user-kit.js";
import customCheckboxRadioSwitch from "assets/jss/user-kit/customCheckboxRadioSwitch.js";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

const basicsStyle = {
  sections: {
    padding: "70px 0"
  },
  button: {
    margin: theme.spacing(1)
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
