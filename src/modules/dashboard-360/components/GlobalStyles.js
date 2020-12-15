import { colors, createStyles, makeStyles } from '@material-ui/core';
import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { setActivatedRoute } from 'src/redux/action';
import { useLocation, withRouter } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        backgroundColor: '#f4f6f8',
        height: '100%',
        width: '100%'
      },
      a: {
        textDecoration: 'none'
      },
      '#root': {
        height: '100%',
        width: '100%'
      },
      '.text-underlined': {
        textDecoration: 'underline'
      },
      '.link-primary': {
        color: colors.indigo[500]
      },
      '.MuiTab-textColorPrimary': {
        color: colors.indigo[500]
      },
      '.MuiChip-root': {
        color: colors.common.white
      },
      '.MuiChip-colorPrimary': {
        color: colors.common.white
      },
      '.MuiChip-colorSecondary': {
        color: colors.common.white
      },
      '.MuiTypography-colorTextSecondary': {
        color: 'rgba(0, 0, 0, 0.54)'
      },
      '.MuiTypography-h6': {
        fontSize: '1.25rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '500',
        lineHeight: '1.6',
        letterSpacing: '0.0075em'
      },
      '.MuiFormLabel-root': {
        color: '#3f51b5'
      },
      '.position-relative': {
        position: 'relative'
      },
      '.position-absolute': {
        position: 'absolute'
      },
      '.MuiToolbar-regular': {
        minHeight: 64
      }
    }
  })
);

const GlobalStyles = ({ activateRoute, location, activatedRoute }) => {
  console.log('activated', activatedRoute);
  const loc = useRef(null);
  useStyles();
  useEffect(() => {
    if (loc.current !== location) {
      console.log(location);
      activateRoute(location.pathname);
      loc.current = location;
    }
  }, [location]);
  return null;
};
const mapStateToProps = state => ({
  activatedRoute: state.activatedRoute
});

const mapDispatchToProps = dispatch => ({
  activateRoute: route => dispatch(setActivatedRoute(route))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GlobalStyles)
);
