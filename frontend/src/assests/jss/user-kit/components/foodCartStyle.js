import { createMuiTheme } from "@material-ui/core/styles";

import { primaryColor } from "../../user-kit";

const theme = createMuiTheme();

const foodcartstyle = {
  appBar: {
    position: "relative",
    background: primaryColor
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
export default foodcartstyle;
