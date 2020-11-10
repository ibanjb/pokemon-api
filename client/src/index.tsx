import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import DeckContainer from './containers/DeckContainer';
import PokemonContainer from './containers/PokemonContainer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';
import { red } from '@material-ui/core/colors';

const store = configureStore().store;
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: {
      main: '#b9f6ca',
    },
  }
});

ReactDOM.render( 
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={PokemonContainer} />
          <Route exact path="/deck" component={DeckContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
