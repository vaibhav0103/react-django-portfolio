import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header, Footer} from './components';
import {About, Contact, More, Tv, Movies} from './pages';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiAvatar: {
      root: {
        width: "128px",
        height: "128px",
        margin: "8px",
      },
    }
  },
  palette: {
    primary: { 
      light:'#fff', // footer->subtitle
      main: '#158ade', //Curious Blue--background header footer
      contrastText: '#f1de39', //golden dream -- headings
      dark: '#cd4315', //tia maria -- home->name 
     },
    secondary: {
      light: '#DAE9F1', //Black Squeeze HEX: #DAE9F1
      main: '#D1D100',  //Corn HEX: #D1D100 sidebar
      dark: '#2D344D', //Martinique HEX: #2D344D sidebar
      contrastText: '#000',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Provider */}
      <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/"><App /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/more"><More /></Route>
        <Route path="/tv"><Tv /></Route>
        <Route path="/movies"><Movies /></Route>
        {/* <Route path="/music"><Music /></Route> */}
      </Switch>
      <Footer />
      </ThemeProvider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
