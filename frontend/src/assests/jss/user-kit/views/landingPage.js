import { title } from 'assets/jss/user-kit.js';
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
    maxWidth: '1520px'
  }
};

const landingPageStyle = {
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    ...carouselContainer
  },

  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  parallaxMobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  parallaxDesktop: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
    height: 300
  }
};

export default landingPageStyle;
