import { primaryColor, container } from "../../user-kit";
import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme();

const cardStyle = {
  root: {
    container,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    minHeight: 200
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(20),
    right: theme.spacing(14)
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600]
    }
  },
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  card: {
    maxWidth: 345,
    boxShadow: "6px 6px 8px #E0E0E0"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: primaryColor
  }
};

export default cardStyle;
