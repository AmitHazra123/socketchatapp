// import { container } from "assets/jss/material-kit-react.js";
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const conatinerFluid = {
  paddingRight: '0px',
  paddingLeft: '0px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
};
const carouselContainer = {
  ...conatinerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px'
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px'
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px'
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px'
  }
};

const carouselStyle = {
  section: {
    padding: '0px 0'
  },
  carouselContainer,
  marginAuto: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
  },
  inputbase: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '100px',
      marginRight: '100px'
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '200px',
      marginRight: '200px'
    }
  }
};

export default carouselStyle;
