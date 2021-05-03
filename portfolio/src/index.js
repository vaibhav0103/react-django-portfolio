import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header, Footer} from './components';
import {About, Contact, More, Tv} from './pages';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { 
      light:'#fff', // footer->subtitle
      main: '#158ade', //Curious Blue--background header footer
      contrastText: '#f1de39', //golden dream -- headings
      dark: '#cd4315', //tia maria -- home->name 
     },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
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
