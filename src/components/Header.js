import React from 'react';
import { Link } from 'react-router-dom';
import Translate from 'react-translate-component';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import SelectTranslator from './SelectTranslator';



export const Header = ({startLogout}) => (
  <header className="header">   
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
            <Translate content="expens" component="h1" />                   
        </Link>  
        <div className="header__content"> 
          <button className="button button--Link" onClick={startLogout}> 
            <Translate content="logOut"/>
        </button>
        <SelectTranslator/>
       </div>  
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

