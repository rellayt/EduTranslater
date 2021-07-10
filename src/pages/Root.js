import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { StylesProvider } from '@material-ui/core/styles';
// import { AuthProvider } from '../providers/Auth';
// import { SnackBarProvider } from '../providers/SnackBar';
// import routes from 'config/Routes';
import AppRoute from '../components/templates/AppRoute';
import routes from '../config/routes';
// import { InnerWrapper } from '../components/templates/MainTemplate/MainTemplate.styles';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StylesProvider injectFirst>
        {/*<SnackBarProvider>*/}
        {/*<AuthProvider>*/}
        <Router>
          <MainTemplate>
            {/*  /!*  <InnerWrapper>*!/*/}
            <Switch>
              {routes.map(({ path, component, isPrivate }) => (
                <AppRoute key={path} component={component} path={path} isPrivate={isPrivate} />
              ))}
              {/*    <Redirect exact from="/channel" to="/channel/1" />*/}
              {/*    <Redirect exact from="/" to="/home" />*/}
              <Redirect from="/*" to="/" />
            </Switch>
            {/*  /!*</InnerWrapper>*!/*/}
          </MainTemplate>
        </Router>
        {/*</AuthProvider>*/}
        {/*</SnackBarProvider>*/}
      </StylesProvider>
    </ThemeProvider>
  );
};

export default Root;
