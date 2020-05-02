import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import counterpart from 'counterpart';
import AppRouter, {history} from './routers/AppRouter';

import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import { startSetExpenses } from './actions/expenses';
import { setLanguage } from './actions/filters';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';



import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import en from './lang/en';
import ru from './lang/ru';
import he from './lang/he';

counterpart.registerTranslations('en',en);
counterpart.registerTranslations('ru',ru);
counterpart.registerTranslations('he',he);
  

const store = configureStore();
const jsx = (
  <Provider store={store}>      
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  let lang = navigator.language;
  lang=lang.substr(0,2);
  store.dispatch(setLanguage(lang));  

  if (user) {       
    store.dispatch(login(user.uid));    
    store.dispatch(startSetExpenses()).then(() => {
    renderApp();
    if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {   
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
