import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from 'screens/Home';
import Main from 'screens/Main';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/app.styled';
import { GlobalStyles } from './app.styled';
import PageTitle from 'components/ui/PageTitle';
import SuccessScreen from 'screens/SuccessScreen';

function App() {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <PageTitle title="Memory Game" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/memo" component={Main} />
            <Route exact path="/success" component={SuccessScreen} />
          </Switch>
        </ThemeProvider>
        
      </Router>
    </Provider>
  );
}

export default App;
